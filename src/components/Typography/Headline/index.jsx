export const Headline = ({ level, ...props }) => {
  switch (level) {
    case 1:
      return <h1 {...props} className={`headline headline_first ${props.className ? props.className : ''}`} />;
    case 2:
      return <h2 {...props} className={`headline headline_second ${props.className ? props.className : ''}`} />;
    case 3:
      return <h3 {...props} className={`headline headline_third ${props.className ? props.className : ''}`} />;
    case 4:
      return <h4 {...props} className={`headline headline_fourth ${props.className ? props.className : ''}`} />;
    default: return;
  }
}