export const Headline = ({ level, ...props }) => {
  switch (level) {
    case 1:
      return <h1 {...props} className={'headline headline_first' + ' ' + props.className} />;
    case 2:
      return <h2 {...props} className={'headline headline_second' + ' ' + props.className} />;
    case 3:
      return <h3 {...props} className={'headline headline_third' + ' ' + props.className} />;
    default: return;
  }
}

