import React from 'react'

const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0,0.7)',
    zIndex: '1000'
  }
  
  const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '90px',
    backgroundColor: '#fff',
    borderRadius: '8px'
  }
  
  export default function ModalPedidoDefault({isOpen, setModalOpen}) {
    if(isOpen){
      return (
          <div style={BACKGROUND_STYLE}>
            <div style={MODAL_STYLE}>
              <div>
                <h1>Como padronizar a transação ME21N para pedidos de remessa:</h1>
                <div>
                    <ul>
                        <li>Abra a transação ME21N</li>
                        <li>clique em "SALVAR"</li>
                    </ul>
              </div>
              </div>
              <button onClick={setModalOpen()}>Fechar</button>
            </div>
          </div>
        )
    }
    else{
      return null
    }
      
  }
