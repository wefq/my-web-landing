const colors = ['orange', 'beige']

export const Section = ({background, ...props }) => <section {...props} className={background + ' ' + props.className}/>