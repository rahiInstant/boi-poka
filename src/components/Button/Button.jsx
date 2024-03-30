const Button = ({innerText, rounded ="rounded-lg" , bg="bg-[#23BE0A]" , font="font-semibold", border="border-none" , text="text-white"}) => {
  return (
    <div>
      <button  className={`px-5 lg:px-7 py-2 lg:py-4 ${border}  text-center ${rounded} ${bg} ${text} text-lg ${font}`}>
        {innerText}
      </button>
    </div>
  );
};




export default Button;
