import Image from 'next/image';

const FuniroFurniture = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1
        style={{
          marginBottom: '5px',
          fontSize: '16px',
          fontWeight: 'normal',
          color: '#555',
        }}
      >
        Share your setup with
      </h1>
      <h2
        style={{
          color: '#333',
          marginBottom: '40px',
          fontWeight: 'bold',
          fontSize: '24px',
        }}
      >
        #FuniroFurniture
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: '20px',
          maxWidth: '1200px',
        }}
      >
        <div>
          <Image src="/Rectangle 36.png" alt="Image 1" objectFit="cover" width={175} height={20} />
        </div>
        <div>
          <Image src="/Rectangle 40.png" alt="Image 5" objectFit="cover" width={295} height={392} />
        </div>
        <div>
          <Image src="/Rectangle 37.png" alt="Image 2" objectFit="cover" width={381} height={323} />
        </div>
        <div>
          <Image src="/Rectangle 43.png" alt="Image 7" objectFit="cover" width={290} height={348} />
        </div>
        <div>
          <Image src="/Rectangle 38.png" alt="Image 3" objectFit="cover" width={451} height={312} />
        </div>
        <div>
          <Image src="/Rectangle 41.png" alt="Image 6" objectFit="cover" width={178} height={242} />
        </div>
        <div>
          <Image src="/Rectangle 39.png" alt="Image 4" objectFit="cover" width={344} height={242} />
        </div>
        <div>
          <Image src="/Rectangle 44.png" alt="Image 8" objectFit="cover" width={258} height={196} />
        </div>
        <div>
          <Image src="/Rectangle 45.png" alt="Image 9" objectFit="cover" width={425} height={433} />
        </div>
      </div>
    </div>
  );
};

export default FuniroFurniture;
