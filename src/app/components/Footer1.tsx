import Image from 'next/image';

const FeaturesSection = () => {
  return (
    <div
      className="bg-[#fdf3e4] flex justify-between items-center border-t border-gray-200"
      style={{
        width: '100%', // Full width to touch edges
        height: '270px', // Maintain the height
        padding: '0 20px', // Optional padding for inner content
      }}
    >
      {/* High Quality */}
      <div className="flex items-center space-x-4">
        <Image
          src="/trophy 1.png"
          alt="High Quality Icon"
          width={40}
          height={40}
        />
        <div>
          <h3 className="text-xl font-semibold text-black">High Quality</h3>
          <p className="text-base text-gray-700">crafted from top materials</p>
        </div>
      </div>

      {/* Warranty Protection */}
      <div className="flex items-center space-x-4">
        <Image
          src="/guarantee.png"
          alt="Warranty Protection Icon"
          width={40}
          height={40}
        />
        <div>
          <h3 className="text-xl font-semibold text-black">Warranty Protection</h3>
          <p className="text-base text-gray-700">Over 2 years</p>
        </div>
      </div>

      {/* Free Shipping */}
      <div className="flex items-center space-x-4">
        <Image
          src="/shipping.png"
          alt="Free Shipping Icon"
          width={40}
          height={40}
        />
        <div>
          <h3 className="text-xl font-semibold text-black">Free Shipping</h3>
          <p className="text-base text-gray-700">Order over $150</p>
        </div>
      </div>

      {/* 24/7 Support */}
      <div className="flex items-center space-x-4">
        <Image
          src="/customer-support.png"
          alt="24/7 Support Icon"
          width={40}
          height={40}
        />
        <div>
          <h3 className="text-xl font-semibold text-black">24 / 7 Support</h3>
          <p className="text-base text-gray-700">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
