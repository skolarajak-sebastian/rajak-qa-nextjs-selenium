// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {

  const dobriKredencijali = (req.body.username === 'admin' && req.body.password === 'admin-2023dobroenielose-vladimir')

  // MORAMO DA OMOGUCIMO DJACIMA KOJI PRATE RANIJA PREDAVANJA DA MOGU I DALJE DA SE ULOGUJU!!!
  // TAKO da cemo dozvoliti i login sa admin/admin
  || (req.body.username === 'admin' && req.body.password === 'admin');
  if (dobriKredencijali) {
    const json = JSON.stringify(
      {
        info: 'LOGIN PROSAO',
        userInfo: {
          id: 1,
          userType: 'ADMIN',
          isPremium: true,
        },
      },
      null,
      4
    );
    res.status(200).send(`
    <html>
    <head> <title>LOGIN2 SUCCESS</title> </head>
    <body> 
           <h1 data-testid='login-uspesan-naslov'> Login Success</h1> 
           
           <a href="/">Back to login </a>

           <pre>${json}</pre>
     </body>

    </html>`);
    return;
  }
  res.status(401).send(`
    <html>
         <head> <title>Invalid credentials </title> </head>
         <body> 
                <h1> Bad Credentials, Login Failed </h1> 
                
                <a href="/">Back to login </a>
          </body>

         </html>
  `);
};
