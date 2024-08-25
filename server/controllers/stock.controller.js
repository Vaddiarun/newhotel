import stock from "../models/stock.model.js";


export const addStock = async (req, res) => {
    console.log(req.body)
    const { name, quantity, category } = req.body;
    const exists = await stock.find({ name })
    if (exists.length > 0) {
            try {
    const updated = await stock.findByIdAndUpdate(exists[0]._id, {
            $set: {
                ...req.body
            },
    }, { new: true });
                console.log(updated)
        res.status(200).send({ success: true, updated });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
    } else {
    const newStock = new stock({
        name: req.body.name,
        category: req.body.category,
        quantity:parseInt(req.body.quantity)
    });

    try {
        const savedStock = await newStock.save();
        console.log(savedStock)
        res.status(200).send({ success: true, savedStock });

    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
    }

}

export const getStock = async (req, res) => {
    try {
        const Stock = await stock.find();
        res.status(200).send({ success: true, Stock });
    } catch (err) { 
        console.log(err.message)
        res.status(500).send({ success: false, message: err.message });
    }
}

