const Middle =()=>{
    return(
            <div className="middle">
                <div className="middle-artical"> Latest Artical</div>
                <div className="card-item">
                    <div className="card">
                        <img className="card-img" src="/images/c5.png" alt="1" />
                        <div className="card-title">Grilled Tomatoes at Home</div>
                        <div className="card-dec">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
                        <button className="card-btn">Read More</button>
                    </div>

                    <div className="card">
                        <img className="card-img" src="/images/c5.png" alt="1" />
                        <div className="card-title">Snacks for Travel</div>
                        <div className="card-dec">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
                        <button className="card-btn">Read More</button>
                    </div>

                    <div className="card">
                        <img className="card-img" src="/images/c5.png" alt="1" />
                        <div className="card-title">Post-workout Recipes</div>
                        <div className="card-dec">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</div>
                        <button className="card-btn">Read More</button>
                    </div>
                </div>
                <div className="page-change">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="cover" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>
                    <span className="change">
                    2/2
                    </span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="cover" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg>
                    </div>

            </div>
    )
};
export default Middle;