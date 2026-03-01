
const ContactInfo = () => {
    return (
        <>
            <section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col items-start bg-[#CEEAF0] rounded-lg p-4 sm:p-6 gap-2 sm:gap-3">
                        <div className="text-sm sm:text-base">
                            <span className="font-semibold">Email:</span> <a href="mailto:seas@hust.edu.vn" className="text-blue-600 hover:underline break-all">seas@hust.edu.vn</a>
                        </div>
                        <div className="text-sm sm:text-base">
                            <span className="font-semibold">Facebook:</span> <a href="https://www.facebook.com/seas.cvn" className="text-blue-600 hover:underline break-all">facebook.com/seas.cvn</a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactInfo;