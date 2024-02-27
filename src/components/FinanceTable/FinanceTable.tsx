import './FinanceTable.css';

interface Props {
    inSum: number;
    spends: number;
}

export function FinanceTable ({inSum, spends}: Props) {
    return <div className="finTable">
            <div className="inLi">
                <h4>Пополнения:</h4>
                <p>{inSum}</p>
            </div>
            <div className="spendsLi">
                <h4>Затраты:</h4>
                <p>{spends}</p>
            </div>
            <div className="bankLi">
                <h4>Остаток:</h4>
                <p>{inSum - spends}</p>
            </div>
        </div>
}