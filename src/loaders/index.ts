const api = {
  url: "https://jamband.github.io/tapes",
  suffix: "__data.json",
};

const extractProps = (
  base: Array<number>,
  next?: any /* eslint-disable-line */
) => {
  const props: any = []; // eslint-disable-line
  for (const [key, index] of Object.entries<number>(next || base[5])) {
    props[key] =
      typeof base[index] === "object"
        ? extractProps(base, base[index])
        : base[index];
  }
  return props;
};

export const home = async () => {
  const years = await fetch(`${api.url}/${api.suffix}`);
  return {
    years: extractProps(await years.json()),
  };
};

export const tapes = async ({ params }) => {
  const tapes = await fetch(`${api.url}/${params.year}/${api.suffix}`);
  return {
    tapes: extractProps(await tapes.json()),
  };
};

export const tape = async ({ params }) => {
  const tape = await fetch(
    `${api.url}/${params.year}/${params.month}/${params.tape}/${api.suffix}`
  );
  return {
    tape: extractProps(await tape.json()),
  };
};

export const track = async ({ params }) => {
  const track = await fetch(
    `${api.url}/${params.year}/${params.month}/${params.tape}/${params.track}/${api.suffix}`
  );

  return {
    track: extractProps(await track.json()),
  };
};
