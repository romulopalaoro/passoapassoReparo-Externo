import React, { useState } from 'react';
import "./step.css"
import mb1a_1 from "./assets/mb1a_1.png" 
import mb1a_2 from "./assets/mb1a_2.png" 
import me21n_1 from "./assets/me21n_1.png" 
import me21n_2 from "./assets/me21n_2.png" 
import me21n_3 from "./assets/me21n_3.png" 
import me21n_4 from "./assets/me21n_4.png" 
import me21n_5 from "./assets/me21n_5.png" 
import me21n_6 from "./assets/me21n_6.png" 
import me21n_7 from "./assets/me21n_7.png"
import me21n_8 from "./assets/me21n_8.png"
import abaMateriais from "./assets/abaMateriais.png"
import Modal from '../Modal';
import ModalPedidoDefault from '../ModalPedidoDefault'

const Steps = () => {
  const [openModal, setOpenModal] = useState(false)

  const [resp, setResp] = useState(document.querySelector('.resp'))
  const [om, setOm] = useState(document.querySelector('.om'))
  const [tipoEquip, setTipoEquip]  = useState(document.querySelector('.tipoEquip'))
  const [aplic, setAplic] = useState(document.querySelector('.aplic'))
  const [empresa, setEmpresa] = useState(document.querySelector('.empresa'))

  console.log(om, aplic, resp, tipoEquip, empresa)


  return (
    <>
    <div className='main'>
        <div >
          <h2 className='tittle'>Enviando o componente para reparo externo.</h2>
        </div>  
        <section>
          <h3>Passo 1: Movimentando o componente para o MNT1</h3>
          <p>Transação utilizada (SAP): <strong>MB1A</strong>
            <div className='passos'>
              <div>
              <ul>
                <li>Tipo movimento: <strong>Z62</strong></li>
                <li>Centro: <strong>1090</strong></li>
                <li>Depósito: <strong>MNT1</strong></li>
                <li><strong>ENTER</strong> </li>
              </ul>
              </div>
              <div>
                <img src={mb1a_1} alt="imagem da primeira tela do MB1A" /><br/>
              </div>
            </div>
            <br/>
            <hr/>
            <div className='passos'>
              <div>
                <ul>
                  <li>Ordem: <strong>número da ordem de manutenção - Operação 0991</strong></li>
                  <li>Material: <strong> código do item a ser movimentado.</strong> </li>
                  <li>Qtd.: <strong> quantidade do item.</strong> </li>
                  <li>UMR: <strong> unidade de medida (geralmente PC)</strong> </li>
                  <li>Lote: <strong> USO/CONSUM</strong> </li>
                  <li><strong>SALVAR</strong> </li>
                </ul>
              </div>
              <div>
                <img src={mb1a_2} alt="imagem da segunda tela do MB1A" />
              </div>
            </div>
          </p>
        </section>
          <br/><br/>
        <section>
            <hr/>
            <hr/>
            <h1>Passo 2: Criando o pedido de Remessa (ZREM) </h1>

            <ModalPedidoDefault 
              isOpen={openModal}  
              setModalOpen={()=>{
                        setOpenModal(openModal)
                      }}>

            </ModalPedidoDefault>

            <button>Passo-a-passo para configurar a transação ME21N para "PEDIDO DE REMESSA"<br/><strong className='configMe21n'>CLIQUE AQUI</strong></button>
            <p>Transação utilizada: <strong>ME21N</strong> <br/>
              <div className='passos'>
                <div>
                  <ul>
                    <li>Alterar tipo de pedido para <strong>"Pedido Remessa"</strong></li>
                    <li>No campo Fornecedor, inserir o código do fornecedor e clicar no ENTER.</li>
                        <ul> 
                          <mark>NECESSÁRIO ATUALIZAR</mark>
                          <li> <strong>099909099</strong> Transmiservice:  </li>
                          <li> <strong>099909099</strong> G&L:  </li>
                          <li> <strong>099909099</strong> Itamil:  </li>
                          <li> <strong>099909099</strong> Rotec:  </li>
                          <li> <strong>099909099</strong> Serthi:  </li>
                          <li> <strong>099909099</strong> MultiEngrenagens:  </li>
                        </ul>
                      
                    <li>No campo Icoterms: Inserir as siglas abaixo conforme tipo de frete.
                      <ul>
                        <li><strong>FOB </strong>  (Frete por conta da Vale)</li>
                        <li><strong>CIF </strong> (Frete por conta do Fornecedor)</li>
                      </ul> 
                    </li>
                  </ul>
                </div>
                <div>
                  
                  <img src={me21n_2} alt="imagem tela 1 ME21N" /><br/>
                </div>
              </div>
              <hr/>
              <div className='passos'>
                  <div>
                    <ul>
                      <li>Coluna "categoria do item:" <strong>sempre L.</strong></li>
                      <li>Coluna "material:" <strong>código do equipamento.</strong> </li>
                      <li>Coluna "quantidade do pedido:" <strong>quantidade de equipamentos que serão enviados para reparo externo.</strong></li>
                      <li>Coluna "data de remessa:" <strong>data atual</strong> </li>
                      <li>Coluna "lote:" <strong>USO/CONSUM</strong>  </li>
                      </ul>
                      <img src={me21n_3} alt="imagem tela 2 ME21N" /><br/>
                      <ul><li> <strong>IMPORTANTE:</strong>  Sempre marcar a coluna <strong>GRATUITO.</strong> </li></ul>
                      <img src={me21n_4} alt="imagem tela 4 ME21N" /><br/>
                  </div>
              </div>
              <hr/>
              <div className='passos'>
                <div>
                  <ul>
                    <li>Clicar na aba <strong> ClassCont</strong></li>
                    <li>Colocar informações do Ponto de Descarga e Recebedor:
                      <ul>
                        <li><strong>0043 MECANICA NOVA: </strong> deverá ser entregue na oficina Mecânica</li>
                        <strong>Recebedor:</strong>  responsável por receber o equipamento recuperado.
                        <li><strong>6004 FDM MNT para REC1: </strong> deverá ser entregue no armazém</li>
                        <strong>Recebedor:</strong> escrever apenas "FDM" <br/>Obs.: (quando o equipamento estiver para chegar, o pedido pode ser alterado e nesse campo deve-se incluir o numero do FDM).
                      </ul>
                    </li>
                  </ul>
                </div>
                <div>
                  <img src={me21n_5} alt="imagem tela 5 ME21N" /><br/>
                </div>
              </div>
              <hr/>
              <div className='passos'>
                <div>
                  <ul>
                    <li>Clicar na aba <strong>Dados de material</strong></li>
                    <li>Clicar no botão <strong>Componentes</strong> </li>
                  </ul>
                    <img src={abaMateriais} alt="imagem da aba materiais" />
                  <ul>
                    <li>Preencher campos: </li>  
                    <ul>
                      <li>Material: <strong>código do equipamento.</strong></li>
                      <li>Quant. necessária: <strong>quantidade de equipamentos a serem enviados.</strong></li>
                      <li>UM registro: <strong>PC.</strong></li>
                      <li>Centro: <strong>1090.</strong></li>
                      <li>Depósito de produção: <strong>MNT1.</strong></li>
                      <li>Data da necessidade: <strong>deve ser igual a “data da remessa”.</strong></li>
                    </ul>
                      <img src={me21n_6} alt="imagem tela 6 ME21N" /><br/>
                    <ul>
                      <li>Clicar em <strong>“Síntese componentes”</strong> e apertar <strong>ENTER</strong>  para habilitar o campo <strong>"Lote”.</strong></li>
                      <li>Preencher o campo Lote com <strong>USO/CONSUM</strong> e voltar para o pedido.</li>
                    </ul>              
                      <img src={me21n_7} alt="imagem tela 7 ME21N" />
                  </ul>
                </div>
                <div>
                 
                  
                  
                </div>
              </div>
              <hr/>
              <div className='passos'>
                <div>
                  <ul>
                    <li>Clicar na ABA <strong>textos</strong></li>
                    <li>Por padrão, escrever conforme exemplo abaixo:</li>
                    <p>*REMESSA PARA CONSERTO*<br/>
                      PEDIDO DE PERITAGEM EXTERNA DO "REDUTOR 3PA5"<br/>
                      EMPRESA: "MULT ENGRENAGEM" <br/>
                      SOLICITANTE: "JOÃO PAULO" <br/>
                      OM: "202401234567" <br/><br/>

                      <div className='inputs' style={{display: "flex", flexDirection: 'column', gap: '3px'}}>
                        <input onChange={()=>{setTipoEquip(document.querySelector('.tipoEquip').value)}} className='tipoEquip' type="text" placeholder='tipo do equipamento' style={{textTransform: 'uppercase', width: '200px'}} />  
                        <input onChange={()=>{setAplic(document.querySelector('.aplic').value)}} className='aplic' type="text" placeholder='aplicação' style={{textTransform: 'uppercase', width: '200px'}} />
                        <input onChange={()=>{setEmpresa(document.querySelector('.empresa').value)}} className='empresa' type="text" placeholder='empresa' style={{textTransform: 'uppercase', width: '200px'}} /> 
                        <input onChange={()=>{setResp(document.querySelector('.resp').value)}} className='resp' type="text" placeholder='responsável' style={{textTransform: 'uppercase', width: '200px'}} /> 
                        <input onChange={()=>{setOm(document.querySelector('.om').value)}} className='om' type="text" placeholder='OM' style={{textTransform: 'uppercase', width: '200px'}} />
                        <br/>
                      </div>
                    

                    <Modal 
                      isOpen={openModal}
                      setModalOpen={()=>{
                        setOpenModal(!openModal)
                      }}
                      tipoEquip={tipoEquip}
                      empresa={empresa}
                      om={om}
                      aplic={aplic}
                      resp={resp}
                    >
                  <p>Conteúdo do Modal</p>
                  </Modal>
                  <button onClick={()=>{setOpenModal(true)}} disabled={!tipoEquip || !aplic || !resp || !empresa || !om ? true : false} >Informações concatenadas:</button>
                  
                    </p>
                  </ul>
                </div>
                <div>
                  <img src={me21n_8} alt="imagem tela 8 ME21N" />
                </div>
              </div>

              <h3><i><mark> Para finalizar, clique em SALVAR. <br/>Nota: O número do pedido irá aparecer no rodapé do SAP, ou no fluxo de documentos da ordem na transação IW32.</mark></i> </h3> 
            </p>
        </section>
    </div>
    </>
  );
}

export default Steps;