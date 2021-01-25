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
controller.save = (req,res)=>{
   const data= req.body;
   req.getConnection((err,conn)=>{
       conn.query('INSERT INTO jugador set ?',[data],(err,jugador)=>{
        res.redirect('/')
       });
   })

   
};
controller.edit = (req,res)=>{
    const {id}= req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM jugador WHERE id = ?',[id], (err,jugador)=>{
            res.render('jugador_edit',{
                data:jugador[0]
            }
            );
        })
    })
};

controller.update=(req,res)=>{
    const {id} = req.params;
    const nuevoJugador= req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE jugador set ? WHERE id = ?', [nuevoJugador,id],(err,rows)=>{
            res.redirect('/');
        });
    })
}

controller.delete = (req,res)=>{
    const {id} = req.params;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM jugador WHERE id = ?',[id], (err,rows)=>{
            res.redirect('/');
        })
    })
};


module.exports = controller;
