import { useParams, Link } from "react-router-dom";
import persons from "../../assets/infomation/team/founders";
import PageTemplate from "./PageTemplate";

const PersonalPage = () => {
    const { founderId } = useParams<{ founderId: string }>();
    
    if (!founderId || !persons[founderId as keyof typeof persons]) {
        return (
            <PageTemplate title="Person Not Found">
                <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Person Not Found</h1>
                    <p className="text-gray-600 mb-8">The person you're looking for doesn't exist.</p>
                    <Link 
                        to="/team" 
                        className="text-blue-600 hover:text-blue-800 underline"
                    >
                        Back to Team
                    </Link>
                </div>
            </PageTemplate>
        );
    }

    const person = persons[founderId as keyof typeof persons];

    return (
        <PageTemplate title={person.name}>
            <section className="bg-white py-16 px-6 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Back Button */}
                    <Link 
                        to="/team" 
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
                    >
                        <svg 
                            className="w-5 h-5 mr-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M15 19l-7-7 7-7" 
                            />
                        </svg>
                        Back to Team
                    </Link>

                    {/* Person Info */}
                    <div className="bg-[#F8F8F8] rounded-lg shadow-lg overflow-hidden">
                        <div className="md:flex">
                            {/* Image Section */}
                            <div className="md:w-1/3 bg-white overflow-hidden">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="md:w-2/3 p-8">
                                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 roboto-slab">
                                    {person.name}
                                </h1>
                                <p className="text-lg text-gray-600 mb-6 italic">
                                    {person.title}
                                </p>
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                                        {person.bio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageTemplate>
    );
};

export default PersonalPage;
