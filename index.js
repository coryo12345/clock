const { app, BrowserWindow } = require('electron');
  

  let win;
  
  function createWindow () {
    win = new BrowserWindow({ width: 600, height: 600 });
  
    win.loadFile('index.html');
    
    win.setMenu(null);
    win.setResizable(false);

    //win.webContents.openDevTools({mode: 'detach'});
  
    win.on('closed', () => {
      win = null;
    });
  }

  app.on('ready', createWindow);
  
  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  
  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });