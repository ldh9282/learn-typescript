import React, {useRef} from "react";

interface ShoppingListFormProps {
    onAddItem: (product: string, quantity: number) => void;
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {

    const productRef = useRef<HTMLInputElement>(null);
    const quantityRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const product = productRef.current!.value;
        const quantity = parseInt(quantityRef.current!.value);
        onAddItem(product, quantity);

        productRef.current!.value = "";
        quantityRef.current!.value = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" ref={productRef} />
            <input type="text" placeholder="Quantity" ref={quantityRef} />
            <button type="submit">Add Item</button>
        </form>
    )
}

export default ShoppingListForm;