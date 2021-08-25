export const Addition = ({ type, ...props }) => {
  switch (type) {
    case 'action':
      return <span {...props} className={type + ' ' + props.className} />;
    case 'complement':
      return <span {...props} className={type + ' ' + props.className} />;
    default: return;
  }
}
