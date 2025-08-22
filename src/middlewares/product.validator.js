import { body, validationResult } from 'express-validator';

const validateRequest = async (req, res, next) => {
    // Step 1: setup validation rules
    const rules = [
        body('name').notEmpty().withMessage('Name is required'),
        body('price').isInt({ min: 1 }).withMessage('Price must be a positive integer'),
        body('imageUrl').isURL().withMessage('Image URL must be a valid URL')
    ];

    // Step 2: run validations
    await Promise.all(rules.map(rule => rule.run(req)));

    // Step 3: check for errors
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        return res.status(400).render('new-product', {
            title: 'Add Product',
            lastVisit: new Date().toLocaleString(),
            errors: validationErrors.array(),
            data: req.body
        });
    }

    // Step 4: proceed to next middleware/controller if valid
    next();
};

export default validateRequest;
