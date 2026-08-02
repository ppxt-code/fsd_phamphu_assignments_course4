import React, { useState, useEffect, useContext } from 'react';
function HookExamples() {
    return (<div>
        <ContextExample />
        <StateEffectExample />
    </div>);
}
//
const PriceContext = React.createContext(null);
function ContextExample() {
    const [price, setPrice] = useState(4000);
    const [discount, setDiscount] = useState(30);
    return (<div>
                <PriceContext.Provider value={{price, discount, setPrice, setDiscount}}>
                    <div style={{ display:"flex", gap:"10px", width:"100%", flex:"1"}}>
                        <PriceComponent />
                        <DiscountComponent />
                    </div>
                    <AppComponent />
                </PriceContext.Provider>
            </div>);
}
function PriceComponent() {
    const { price, setPrice } = useContext(PriceContext);
    return (<div  style={{border: "1px solid white", padding: "10px", margin: "10px", flex:"1"}}>
        <h5>Price Component:</h5>
            Price: <input type="number" value={price} onChange={(e)=>setPrice(Number(e.target.value))} />
            </div>);
}
function DiscountComponent() {
    const { discount, setDiscount } = useContext(PriceContext);
    return (<div  style={{border: "1px solid white", padding: "10px", margin: "10px", flex:"1"}}>
        <h5>Discount Component:</h5>
            Discount: <input type="number" value={discount} onChange={(e)=>setDiscount(Number(e.target.value))} />
            </div>);
}
function AppComponent() {
    const { price, discount } = useContext(PriceContext);
    return (<div  style={{border: "1px solid white", padding: "10px", margin: "10px"}}>
            <h5>App Component:</h5> <p>Actual Price: {price}</p>
            <p>Discount: {discount}%</p>
            <p>Discounted Price: {price * (1 - discount/100)}</p>
            </div>);
}
//
function StateEffectExample() {
    const [student] = useState({name: "Corinne", age: 40});
    const [notes, setNotes] = useState({Maths: 50, Physics: 60, Chemistry: 70});
    const [total, setTotal] = useState(notes.Maths + notes.Physics + notes.Chemistry);
    useEffect(()=>{setTotal(notes.Maths + notes.Physics + notes.Chemistry)},[notes]);
    return (<div style={{border: "1px solid white ", padding: "10px", margin: "10px", display:"flex", alignItems:"center"}}>
                <div style={{flex:"1"}}>
                    <h5>Marksheet</h5>
                    <div style={{display:"flex", flex:"1"}}>
                        <p style={{flex:"1"}}>Name: {student.name}</p> <p style={{flex:"1"}}>Age: {student.age}</p>
                    </div>
                    <p>Total Marks: {total}</p>
                    <p>Maths: {notes.Maths}</p> <p>Physics: {notes.Physics}</p> <p>Chemistry: {notes.Chemistry}</p>
                </div>
                <div style={{flex:"1"}}>
                    <button onClick = {()=>setNotes({Maths:notes.Maths+10, Physics:notes.Physics+10, Chemistry:notes.Chemistry+10})}>Update</button>
                </div>
            </div>);
}

export default HookExamples;