import { Button2, Container3, Container4, Container5, Container6, Name } from "./style";

export default function Product(props) {
    let placeholderList = []
    for (let i = 0; i < props.order.length; i++) {
        placeholderList.push(props.order[i])
    }

    function removeProduct() {
        console.log('removido')
        for (let i = 0; i < placeholderList.length; i++) {
            if (placeholderList[i].name === props.name) {
                placeholderList.splice(i, 1)
                i--
            }
        }
        props.setOrder(placeholderList)
        let sum = 0
        for(let i = 0; i < placeholderList.length; i++) {
            let arr = []
            for (let o = 0; o < placeholderList[i].price.length; o++) {
                if (placeholderList[i].price[o] === ',') {
                  arr.push('.')
                } else {
                  arr.push(placeholderList[i].price[o])
                }
            }
            let number = arr.join('')
            sum += parseFloat(number)
        }

        props.setTotal(sum)
    }


    return (
        <Container3>
            <Container4>
                <img src={props.image}/>
            </Container4>
            <Container5>
                <Container6>
                    <Name>{props.name}</Name>
                    <p>R$ {props.price}</p>
                </Container6>
                <Button2 onClick={removeProduct}>Remover x</Button2>
            </Container5>
        </Container3>
    )
}