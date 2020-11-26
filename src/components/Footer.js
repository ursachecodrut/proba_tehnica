import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="nav justify-content-center footer">
                <div className="container align-self-center">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <svg className="mx-2" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.8819 13.2463C16.8819 10.8876 15.0033 9.00068 12.655 9.00068C10.3068 9.00068 8.42815 10.8876 8.42815 13.2463C8.42815 15.605 10.3068 17.492 12.655 17.492C15.0033 17.492 16.8819 15.605 16.8819 13.2463ZM19.0736 13.2463C19.0736 16.863 16.2557 19.6934 12.655 19.6934C9.05435 19.6934 6.23645 16.863 6.23645 13.2463C6.23645 9.62967 9.05435 6.79924 12.655 6.79924C16.2557 6.79924 19.0736 9.62967 19.0736 13.2463ZM20.7956 6.48474C20.7956 7.42822 20.1694 8.05721 19.2301 8.05721C18.2908 8.05721 17.6646 7.42822 17.6646 6.48474C17.6646 5.54126 18.2908 4.91228 19.2301 4.91228C20.1694 4.91228 20.7956 5.69851 20.7956 6.48474ZM12.655 2.86808C10.7764 2.86808 6.86265 2.71083 5.29715 3.33981C4.2013 3.81155 3.262 4.75503 2.9489 5.85576C2.3227 7.42822 2.47925 11.3594 2.47925 13.2463C2.47925 15.1333 2.3227 19.0645 2.9489 20.6369C3.262 21.7376 4.2013 22.6811 5.29715 22.9956C6.86265 23.6246 10.933 23.4674 12.655 23.4674C14.3771 23.4674 18.4474 23.6246 20.0129 22.9956C21.1087 22.5239 21.8915 21.7376 22.3611 20.6369C22.9873 18.9072 22.8308 14.976 22.8308 13.2463C22.8308 11.5166 22.9873 7.42822 22.3611 5.85576C22.048 4.75503 21.1087 3.81155 20.0129 3.49706C18.4474 2.71083 14.5336 2.86808 12.655 2.86808ZM25.179 13.2463V18.4355C25.179 20.3224 24.5528 22.2094 23.1439 23.7818C21.7349 25.1971 19.8563 25.826 17.8212 25.826H7.48885C5.61025 25.826 3.73165 25.1971 2.16615 23.7818C0.91375 22.3666 0.131001 20.4797 0.131001 18.4355V13.2463V8.05721C0.131001 6.013 0.91375 4.12605 2.16615 2.71083C3.73165 1.45286 5.61025 0.666626 7.48885 0.666626H17.8212C19.6998 0.666626 21.5784 1.29561 23.1439 2.71083C24.3963 4.12605 25.179 6.013 25.179 8.05721V13.2463Z" fill="white"/>
                        </svg>
                        <svg className="mx-2" width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.4433 3.69191C27.402 4.14308 26.2689 4.46779 25.1017 4.59425C26.3135 3.87113 27.221 2.72872 27.6538 1.38136C26.5167 2.06082 25.271 2.53726 23.972 2.78956C23.429 2.20655 22.7724 1.74209 22.0429 1.42514C21.3135 1.10818 20.5268 0.945516 19.732 0.94728C16.5164 0.94728 13.9302 3.56544 13.9302 6.77833C13.9302 7.22951 13.9847 7.68068 14.0731 8.11476C9.25813 7.86183 4.96376 5.55128 2.10879 2.01369C1.58858 2.90617 1.31597 3.92237 1.31933 4.95656C1.31933 6.97999 2.34358 8.76417 3.90548 9.81349C2.98503 9.77708 2.08613 9.52296 1.2819 9.07179V9.14357C1.2819 11.9771 3.27596 14.3252 5.93357 14.8652C5.43457 14.9954 4.92125 15.062 4.4057 15.0635C4.02798 15.0635 3.67069 15.0259 3.30999 14.9746C4.045 17.2852 6.18538 18.9634 8.7341 19.0181C6.74004 20.5869 4.24236 21.5098 1.53031 21.5098C1.0437 21.5098 0.594528 21.4927 0.12834 21.438C2.70088 23.0957 5.75322 24.0527 9.04035 24.0527C19.7116 24.0527 25.5509 15.1729 25.5509 7.46535C25.5509 7.21242 25.5509 6.95949 25.5339 6.70656C26.6636 5.87599 27.6538 4.84718 28.4433 3.69191Z" fill="white"/>
                        </svg>
                        <svg className="mx-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.01168 0.579712C2.66199 0.579712 0.77002 2.4801 0.77002 4.84024V19.6525C0.77002 22.0127 2.66199 23.9131 5.01168 23.9131H13.0043V14.7912H10.6029V11.507H13.0043V8.70118C13.0043 6.49677 14.4231 4.47274 17.6916 4.47274C19.015 4.47274 19.9936 4.60035 19.9936 4.60035L19.9166 7.66724C19.9166 7.66724 18.9186 7.65776 17.8296 7.65776C16.6509 7.65776 16.4619 8.20325 16.4619 9.10882V11.507H20.0103L19.8556 14.7912H16.4619V23.9131H19.7584C22.1081 23.9131 24 22.0127 24 19.6526V4.84026C24 2.48012 22.1081 0.579735 19.7584 0.579735H5.01166L5.01168 0.579712Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="row justify-content-center">
                        Copyright 2020 | Cine ne pârăște o mierlește.
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;