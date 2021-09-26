const types = ['default', 'hot', 'cold']

export const Button = ({ type, ...props }) =>
  types.find(item => item === type)
    ? <button {...props} className={type + ' ' + 'button' +' ' + props.className} />
    : console.error(`Type: ${type} is not implemented!`)