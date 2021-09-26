const types = ['action', 'complement']

export const Addition = ({ type, ...props }) =>
  types.find((item) => item === type)
    ? <span {...props} className={type + ' ' + props.className} />
    : console.error(`Type: ${type} is not implemented!`);
