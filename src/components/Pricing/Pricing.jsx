import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic",
      description: "Perfect for casual readers",
      price: 9.99,
      features: [
        "Access to a limited library of books",
        "Ability to read on up to 2 devices",
        "No ads",
      ],
    },
    {
      name: "Standard",
      description: "Ideal for regular readers",
      price: 14.99,
      features: [
        "Access to a larger library of books",
        "Ability to read on up to 5 devices simultaneously",
        "Offline reading support",
        "No ads",
      ],
    },
    {
      name: "Premium",
      description: "For avid readers who want it all",
      price: 19.99,
      features: [
        "Access to the entire library of books",
        "Ability to read on unlimited devices ",
        "Offline reading support",
        "Ad-free experience",
        "Exclusive access to new releases",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="border rounded-xl py-8 px-4 mx-4">
        <p className="text-lg w-full lg:w-[75%] text-center mx-auto">
          Our book reading platform offers three plans: Basic for casual readers
          at $9.99, Standard for regular readers at $14.99, and Premium for avid
          readers at $19.99. Each plan includes various features tailored to
          different reading preferences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mx-4">
        {pricingPlans.map((plan, id) => {
          return (
            <div key={id} className="p-4 bg-zinc-200 rounded-xl flex flex-col">
              <h1 className="text-4xl font-bold text-center">
                {plan.price}/mon
              </h1>
              <h1 className="text-2xl font-medium mt-1 text-center">
                {plan.name} membership plan
              </h1>
              <ul className="flex-grow ml-1 mt-3">
                {plan.features.map((feature, idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-base"
                    >
                      <IoIosCheckmarkCircleOutline />
                      <li>{feature}</li>
                    </div>
                  );
                })}
              </ul>
              <button className="text-xl font-medium p-1 bg-zinc-300 text-center w-full rounded-md mt-3 hover:bg-zinc-400">
                Acquire Plan
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
