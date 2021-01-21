const controller ={};

controller.list = (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM jugador', (err, jugadores)=>{
            if (err){
                res.json(err);
            }
            res.render('jugadores',{
                data:jugadores

            })
        });
    });
};
// controller.save = (req,res)=>{
//     res.send('hello word');
// };
// controller.delete = (req,res)=>{
//     res.send('hello word');
// };


module.exports = controller;
