import { ProgressProps } from "../interfaces/interfaces"

export const Progress: React.FC<ProgressProps> = ({title,value}) => {
    return (
        <>
        <label htmlFor="progress" className="header_label">{title}</label>
        <progress id="progress" max="3" value={value} className="header_progress">
          {value}
        </progress>
        </>
        
    )
}