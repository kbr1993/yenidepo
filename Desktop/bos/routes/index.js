
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};
exports.hakkimizda=function(req,res)
{
res.render('hakkimizda',{title:'bos|Hakkımızda'})
};
