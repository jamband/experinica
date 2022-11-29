export const extractProps = (
  base: any /* eslint-disable-line */,
  next?: any /* eslint-disable-line */
) => {
  const data = base["nodes"][1]["data"];
  const props: any = []; // eslint-disable-line

  for (const [key, index] of Object.entries<number>(next || data[0])) {
    props[key] =
      typeof data[index] === "object"
        ? extractProps(base, data[index])
        : data[index];
  }
  return props;
};
