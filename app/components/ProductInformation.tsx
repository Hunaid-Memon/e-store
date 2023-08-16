
const ProductInformation = () => {
  return (
    <div className="my-12 space-y-8">
      <div className="flex border-solid pb-4 border-b-2 border-gray-200">
        <h1 className="text-2xl font-bold py-12">Product Information</h1>
        <p className="text-9xl font-bold absolute opacity-5">Overview</p>
      </div>
      <div className="flex flex-col md:flex-row">
        {" "}
        {/* Responsive flex layout */}
        <h3 className="font-semibold md:w-4/12">PRODUCT DETAILS</h3>
        <p className="md:w-8/12 tracking-widest">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          sit distinctio impedit. Fuga consequatur molestias perspiciatis
          expedita animi? Dignissimos numquam unde iste voluptate voluptatem
          voluptates,Architecto placeat doloribus quod nostrum, deleniti exer,
          is aliquam animi atque fugit minima itaque repellendus facilis ullam
          earum, quod molestiae porro eius pariatur delectus eligendi architecto
          consequuntur? Enim, temporibus!
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        {" "}
        {/* Responsive flex layout */}
        <h3 className="font-semibold md:w-4/12">PRODUCT CARE</h3>
        <ul className="md:w-8/12 list-disc tracking-widest">
          <li>Hand wash using cold water.</li>
          <li>Do not using bleach.</li>
          <li>Hang it to dry.</li>
          <li>Iron on low temperature.</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductInformation