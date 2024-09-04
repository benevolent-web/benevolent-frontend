import CustomerProfileItem, { CustomerProfileItemProps } from '~/components/features/cards/customer-profile-item';

const CustomerProfileSection: React.FC = () => {
  const customerProfileItems: CustomerProfileItemProps[] = [
    {
      userProfile: "For Early-Stage Startups",
      title: "MVP Development",
      subtitle: "Validate your idea quickly and efficiently",
      listItems: [
        "Rapid prototyping",
        "User-centric design",
        "Core feature focus"
      ],
      ctaText: "Get MVP Quote",
      ctaLink: "/",
      imageSrc: "/images/Site-Builder--Streamline-Lagos.png"
    },
    {
      userProfile: "For Growing Startups",
      title: "Scalable Architecture",
      subtitle: "Build a robust foundation for your proven concept",
      listItems: [
        "Scalable infrastructure",
        "Performance optimization",
        "Future-proof design patterns"
      ],
      ctaText: "Scale Your App",
      ctaLink: "/",
      imageSrc: "/images/Coding-A-Website--Streamline-Lagos.png"
    },
    {
      userProfile: "For Established Products",
      title: "Product Enhancement",
      subtitle: "Polish and expand your successful application",
      listItems: [
        "Feature expansion",
        "UX/UI refinement",
        "Codebase modernization"
      ],
      ctaText: "Enhance Your Product",
      ctaLink: "/",
      imageSrc: "/images/Interface-Testing--Streamline-Lagos.png"
    },
    {
      userProfile: "For Innovative Businesses",
      title: "Web3 Integration",
      subtitle: "Incorporate blockchain and crypto functionality",
      listItems: [
        "Crypto payment gateways",
        "Smart contract development",
        "DeFi feature integration"
      ],
      ctaText: "Explore Web3 Options",
      ctaLink: "/",
      imageSrc: "/images/Woman-In-Crypto--Streamline-Lagos.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 max-w-screen-xl">
      {customerProfileItems.map((customerProfile, index) => (
        <CustomerProfileItem
          key={`customer-profile-${index + 1}`}
          {...customerProfile}
          reversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default CustomerProfileSection;