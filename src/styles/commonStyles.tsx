
export interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}
const styles:StylesDictionary = {
  default: {
    backgroundColor: '#799393',
    color: 'black',
    width: '200px',
    height: '50px',
    borderRadius: '25px',
    border: 'none',
    margin: '10px',
    fontWeight: 'bolder',
  },
  disable: {
    backgroundColor: 'red',
    color: 'white',
  },
}
export default styles;