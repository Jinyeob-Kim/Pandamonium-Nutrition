module.exports = {
  addReview: (req, res, next) => {
    const db = req.app.get("db");
    const { user_id } = req.user;
    const {
      product_id,
      review_name,
      review_email,
      rating,
      review_title,
      description
    } = req.body;
    db
      .add_review([
        user_id,
        product_id,
        review_name,
        review_email,
        rating,
        review_title,
        description
      ])
      .then(review => res.status(200).json(review))
      .catch(err => {
        res.status(500).json(err);
      });
  }
};
