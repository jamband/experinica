type DataNode = {
  type: "data";
  data: Record<string, unknown>;
};

type DataNodes = {
  type: "data";
  nodes: Array<DataNode>;
};

export const fetchDataNodes = async (path: string) => {
  const response = await fetch(
    `https://jamband.github.io/tapes${path}__data.json`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch.");
  }

  return response.json();
};

export const extractData = <T>(
  dataNodes: DataNodes,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  next?: any,
) => {
  const current = dataNodes.nodes[1].data;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const data: any = [];

  for (const [key, index] of Object.entries<number>(next || current[0])) {
    data[key] =
      typeof current[index] === "object"
        ? extractData(dataNodes, current[index])
        : current[index];
  }

  return data as T;
};
