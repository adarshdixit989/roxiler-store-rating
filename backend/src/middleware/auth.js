const jwt=require('jsonwebtoken');

function auth(req,res,next){
  try{
    const h=req.headers.authorization||'';
    if(!h.startsWith('Bearer ')) return res.status(401).json({message:'Authentication required'});
    req.user=jwt.verify(h.slice(7),process.env.JWT_SECRET);
    next();
  }catch(e){
    return res.status(401).json({message:'Invalid or expired token'});
  }
}

const roles=(...allowed)=>(req,res,next)=>
  allowed.includes(req.user.role)?next():res.status(403).json({message:'Access denied'});

module.exports={auth,roles};
