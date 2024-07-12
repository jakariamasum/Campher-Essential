import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of camping gear do you offer?",
      answer:
        "We offer a wide range of camping gear, including tents, sleeping bags, backpacks, cooking equipment, and more. All our products are designed to ensure a comfortable and enjoyable camping experience.",
    },
    {
      question: "Do you provide product warranties?",
      answer:
        "Yes, we provide warranties on many of our products. The warranty period varies depending on the manufacturer and the product. Please check the product details for specific warranty information.",
    },
    {
      question: "Can I return or exchange an item?",
      answer:
        "Absolutely! We have a hassle-free return and exchange policy. If you're not satisfied with your purchase, you can return or exchange it within 30 days of receipt. Please refer to our return policy for more details.",
    },
    {
      question: "Do you offer discounts for bulk purchases?",
      answer:
        "Yes, we offer discounts for bulk purchases. If you're planning to buy camping gear for a group or organization, please contact our customer service team for special pricing and discounts.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, we will send you a tracking number via email. You can use this tracking number to monitor the status and delivery of your order through our shipping partner's website.",
    },
  ];

  return (
    <div className="max-w-[1230px] mx-auto my-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold mb-4">
          Frequently Asked <span className="text-[#22A1F0]">Questions</span>
        </h1>
        <p className="text-lg text-gray-400">
          Here are some of the most common questions we receive about our
          products and services. If you have any other questions, feel free to
          contact us.
        </p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
