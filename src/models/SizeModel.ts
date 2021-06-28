import IWithML from './WithMLModel'
import IWithOutML from './WithOutMLModel'

export default interface ISize {
    withML: IWithML;
    withOutML: IWithOutML;
}