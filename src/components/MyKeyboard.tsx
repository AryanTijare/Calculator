import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";

export default function MyKeyboard() {
    const [firstNumber, setFirstNumber] = React.useState<string>("");
    const [secondNumber, setSecondNumber] = React.useState<string>("");
    const [operation, setOperation] = React.useState<string>("");
    const [result, setResult] = React.useState<number | null>(null);

    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue);
        }
    };

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
    };

    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    };

    const getResult = () => {
        let num1 = parseFloat(firstNumber);
        let num2 = parseFloat(secondNumber);

        switch (operation) {
            case "+":
                clear();
                setResult(num2 + num1);
                break;
            case "-":
                clear();
                setResult(num2 - num1);
                break;
            case "*":
                clear();
                setResult(num2 * num1);
                break;
            case "/":
                clear();
                if (num1 !== 0) {
                    setResult(num2 / num1);
                } else {
                    setResult(0);
                }
                break;
            default:
                clear();
                setResult(0);
                break;
        }
    };

    const firstNumberDisplay = () => {
        if (result !== null) {
            return (
                <Text
                    style={
                        result < 99999
                            ? [Styles.screenFirstNumber, { color: myColors.result }]
                            : [Styles.screenFirstNumber, { fontSize: 50, color: myColors.result }]
                    }
                >
                    {result?.toString()}
                </Text>
            );
        }
        if (firstNumber && firstNumber.length < 6) {
            return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
        }
        if (firstNumber === "") {
            return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
                    {firstNumber}
                </Text>
            );
        }
        if (firstNumber.length > 7) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>{firstNumber}</Text>
            );
        }
    };

    return (
        <View style={Styles.viewBottom}>
            <View
                style={{
                    height: 120,
                    width: "90%",
                    justifyContent: "flex-end",
                    alignSelf: "center",
                }}
            >
                <Text style={Styles.screenSecondNumber}>
                    {secondNumber}
                    <Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>
                        {operation}
                    </Text>
                </Text>
                {firstNumberDisplay()}
            </View>
            <View style={Styles.row}>
                <TouchableOpacity style={Styles.btnGray} onPress={clear}>
                    <Text style={Styles.smallTextLight}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btnGray} onPress={() => handleOperationPress("+/-")}>
                    <Text style={Styles.smallTextLight}>+/-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btnGray} onPress={() => handleOperationPress("％")}>
                    <Text style={Styles.smallTextLight}>％</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btnBlue} onPress={() => handleOperationPress("/")}>
                    <Text style={Styles.smallTextLight}>÷</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.row}>
                <TouchableOpacity style={Styles.btnLight} onPress={() => handleNumberPress("7")}>
                    <Text style={Styles.smallTextDark}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btnLight} onPress={() => handleNumberPress("8")}>
                    <Text style={Styles.smallTextDark}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btnLight} onPress={() => handleNumberPress("9")}>
                    <Text style={Styles.smallTextDark}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btnBlue} onPress={() => handleOperationPress("*")}>
                    <Text style={Styles.smallTextLight}>×</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.row}>
                <TouchableOpacity style={Styles.btnLight} onPress={() => handleNumberPress("4")}>
                    <Text style={Styles.smallTextDark}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btnLight} onPress={() => handleNumberPress("5")}>
                    <Text style={Styles.smallTextDark}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btnLight} onPress={() => handleNumberPress("6")}>
                    <Text style={Styles.smallTextDark}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btnBlue} onPress={() => handleOperationPress("-")}>
                    <Text style={Styles.smallTextLight}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.row}>
                <TouchableOpacity style={Styles.btnLight} onPress={() => handleNumberPress("1")}>
                    <Text style={Styles.smallTextDark}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btnLight} onPress={() => handleNumberPress("2")}>
                    <Text style={Styles.smallTextDark}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btnLight} onPress={() => handleNumberPress("3")}>
                    <Text style={Styles.smallTextDark}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btnBlue} onPress={() => handleOperationPress("+")}>
                    <Text style={Styles.smallTextLight}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.row}>
                <TouchableOpacity style={Styles.btnLight} onPress={() => handleNumberPress(".")}>
                    <Text style={Styles.smallTextDark}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btnLight} onPress={() => handleNumberPress("0")}>
                    <Text style={Styles.smallTextDark}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btnLight} onPress={() => setFirstNumber(firstNumber.slice(0, -1))}>
                    <Text style={Styles.smallTextDark}>⌫</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btnGreen} onPress={() => getResult()}>
                    <Text style={Styles.smallTextLight}>=</Text>
                </TouchableOpacity>
            </View>
            <Text style={Styles.footerText}>Calc By Aryan Tijare</Text>
        </View>
    );
}
