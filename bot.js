const  Discord  =  require ( ' discord.js ' );
 cliente  const =  novo  Discord.Client ();
 cliente . em ( ' pronto ' , () => {
    console . log ( ' eu estou pronto! ' );
});
 cliente . on ( ' mensagem ' , mensagem  => {
    if ( mensagem . conteúdo  ===  ' Olá ' ) {
    	mensagem . reply ( ' tudo bem? ' );
  	}
});
// ESTE DEVE SER DESTA FORMA
cliente . login ( processo . env . BOT_TOKEN );
