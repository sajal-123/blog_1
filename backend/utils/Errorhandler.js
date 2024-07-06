export const errorResponseHandler=(err,req,res,next)=>{
    const statusCode=err.statusCode || 400;
    return res.status(statusCode).json({
        message:err.message,
        stack:process.env.NODE_ENV =='production'? null : err.stack
    })
}

export const InvalidPathHandler=(req,res,next)=>{
    let error = new Error('Invalid Path Request');
    error.statusCode=404;
    next(error)
}