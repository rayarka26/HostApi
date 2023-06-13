const pro = require("../models/product")
const getAllProducts= async(req, res)=>{
    const {company, name, sort, select} = req.query;
    const quereObj = {};
    if(company){
        quereObj.company = company;
        
    }
    if(name){
        quereObj.name = {$regex:name, $options : "i"};
    }
    let apidata = pro.find(quereObj);
    if(sort){
        let sortFix = sort.replace(","," ");
        // quereObj.sort = sortFix
        apidata = apidata.sort(sortFix);
    }
    if(select){
        let selectFix = select.split(",").join(" ");
        // quereObj.sort = sortFix
        apidata = apidata.select(selectFix);
    }
    //Pagination Formulas
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skip = (page-1)*limit
    apidata = apidata.skip(skip).limit(limit);
    console.log(quereObj);
    const myData = await apidata;
    res.status(200).json({myData});
};

const getAllProductsTesting= async(req, res)=>{
    const myData = await pro.find(req.query).select("name");
    // sort = name,price

    res.status(200).json({myData});
};

module.exports = {getAllProducts, getAllProductsTesting};