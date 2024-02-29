import { API_URL, API_URL_SUFFIX } from "@/constants/api";

type DataNode = {
  type: "data";
  data: Record<string, unknown>;
};

type DataNodes = {
  type: "data";
  nodes: Array<DataNode>;
};

export const fetchDataNodes = async (path: string) => {
  const response = await fetch(`${API_URL}${path}${API_URL_SUFFIX}`);

  if (!response.ok) {
    throw new Error("Failed to fetch.");
  }

  return response.json();
};

export const extractData = <T>(
  dataNodes: DataNodes,
  next?: any, // eslint-disable-line
) => {
  const current = dataNodes.nodes[1].data;
  const data: any = []; // eslint-disable-line

  for (const [key, index] of Object.entries<number>(next || current[0])) {
    data[key] =
      typeof current[index] === "object"
        ? extractData(dataNodes, current[index])
        : current[index];
  }

  return data as T;
};
