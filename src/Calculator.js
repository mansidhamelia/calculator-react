import React, { useState } from 'react';
import './Calculator.css'

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [currentValue, setCurrentValue] = useState('');
    const [previousValue, setPreviousValue] = useState('');

    const [operator, setOperator] = useState(null);

    const handleDigitClick = (digit) => {

        if (displayValue === '0' || currentValue === '0') {
            setCurrentValue(digit);
            setDisplayValue(digit);

        } else {
            setCurrentValue(currentValue + digit);
            setDisplayValue(currentValue + digit);
        }
    };

    const handleOperatorClick = (op) => {
        if (operator !== null) {
            const result = calculateResult();
            setPreviousValue(result);
            setDisplayValue(result + ' ' + op + ' ');
        } else {
            setPreviousValue(currentValue);
            setDisplayValue(currentValue + ' ' + op + ' ');
        }
        setOperator(op);
        setCurrentValue('');
    };

    const calculateResult = () => {
        const num1 = parseFloat(previousValue);
        const num2 = parseFloat(currentValue);

        switch (operator) {
            case '+':
                return (num1 + num2).toString();
            case '-':
                return (num1 - num2).toString();
            case '*':
                return (num1 * num2).toString();
            case '/':
                return (num1 / num2).toString();
            default:
                return currentValue;
        }
    };

    const handleEqualClick = () => {
        if (operator !== null && currentValue !== '') {
            const result = calculateResult();
            setPreviousValue(result);
            setCurrentValue(result);
            setDisplayValue(result);
            setOperator(null);
        }
    };

    const handleClearClick = () => {
        setDisplayValue('0');
        setCurrentValue('');
        setOperator(null);
        setPreviousValue('');

    };


    return (
        <div className="container">
            <div className="display">
                <div className="history">
                    <p id="history"> {displayValue}</p>
                </div>
                <div className="result">
                    <p id="result">{currentValue}</p>
                </div>
            </div>
            <div className="buttons">
                <button className="number" onClick={() => handleDigitClick('7')}>7</button>
                <button className="number" onClick={() => handleDigitClick('8')}>8</button>
                <button className="number" onClick={() => handleDigitClick('9')}>9</button>
                <button className="operator" onClick={() => handleOperatorClick('/')}>/</button>
                <button className="number" onClick={() => handleDigitClick('4')}>4</button>
                <button className="number" onClick={() => handleDigitClick('5')}>5</button>
                <button className="number" onClick={() => handleDigitClick('6')}>6</button>
                <button className="operator" onClick={() => handleOperatorClick('*')}>*</button>
                <button className="number" onClick={() => handleDigitClick('1')}>1</button>
                <button className="number" onClick={() => handleDigitClick('2')}>2</button>
                <button className="number" onClick={() => handleDigitClick('3')}>3</button>
                <button className="operator" onClick={() => handleOperatorClick('-')}>-</button>
                <button className="number" onClick={() => handleDigitClick('0')}>0</button>
                <button className="operator" onClick={() => handleOperatorClick('+')}>+</button>
                <button className="operator" onClick={() => handleEqualClick()}>=</button>
                <button className="operator" onClick={() => handleClearClick('remove')} id="clear">C</button>
            </div>
        </div>
    )
}

export default Calculator