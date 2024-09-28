const sma = {
    index:(req, res)=>{ 
        res.render('index');

    },
    about:(req, res)=>{ 
        res.render('about');

    },
    socialmedia:(req, res)=>{
        res.render('socialmedia');

    },
    family:(req, res)=>{
        res.render('family');

    },
    contact:(req, res)=>{
        res.render('contact');

    }

};

module.exports = sma;
