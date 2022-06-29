export const Typography: React.FC<{ title: string, cost: number }> = ({title, cost}) => {
    return (
            <div>
                <p>title: {title}</p>
                <p>COST: {cost} UAN</p>
            </div>
    )
}