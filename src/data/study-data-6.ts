import { StudyItem } from "../types/study";

export const studyData6: StudyItem[] = [
  { id: "350", itemNumber: "61v", category: "Segurança", question: "O que é um Bypass/Seguranca?", answer: "Sistema de bypass para religar o ROV.", orderIndex: 350 },
  { id: "351", itemNumber: "61v", category: "Segurança", question: "Quando usar o Bypass?", answer: "Somente em emergência.", orderIndex: 351 },
  { id: "352", itemNumber: "61v", category: "Segurança", question: "Qual o risco do Bypass?", answer: "Pode causar danos se usado errado.", orderIndex: 352 },
  
  { id: "353", itemNumber: "61w", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Função do aterramento da (PDU):", answer: "Proteger contra alta tensão.", orderIndex: 353 },
  { id: "354", itemNumber: "61w", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "O que é importante sobre aterramento no deck?", answer: "O ROV deve estar aterrado (garra conectada ao convés).", orderIndex: 354 },
  
  { id: "355", itemNumber: "61x", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Fluxo de energia Layout do sistema:", answer: "Gerador → PDU → HVTU → ROV", orderIndex: 355 },
  { id: "356", itemNumber: "61x", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Quais os componentes de energia?", answer: "OCU (controle), PDU (distribuição), HVTU (transformador).", orderIndex: 356 },
  { id: "357", itemNumber: "61x", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Como os dados são transmitidos no layout do sistema?", answer: "Via fibra óptica.", orderIndex: 357 },
  
  { id: "358", itemNumber: "61y", category: "Segurança", question: "O que é LOTO(Seguranca)?", answer: "Lockout/Tagout (bloqueio de energia).", orderIndex: 358 },
  { id: "359", itemNumber: "61y", category: "Segurança", question: "Quando usar LOTO?", answer: "Manutenção.", orderIndex: 359 },
  { id: "360", itemNumber: "61y", category: "Segurança", question: "Qual o objetivo do LOTO?", answer: "Evitar energização acidental.", orderIndex: 360 },
  
  { id: "361", itemNumber: "61z", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "O que faz um GFD(Ground Fault Detector)?", answer: "Detecta fuga de corrente (falha de isolamento).", orderIndex: 361 },
  { id: "362", itemNumber: "61z", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Qual a situação normal para o GFD?", answer: "Corrente = 0, Resistência = infinita.", orderIndex: 362 },
  { id: "363", itemNumber: "61z", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Quando o GFD dá alarme?", answer: "≈ 1 MegaOhm.", orderIndex: 363 },
  { id: "364", itemNumber: "61z", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Quando o GFD faz corte automático?", answer: "≈ 500 kOhm.", orderIndex: 364 },
  { id: "365", itemNumber: "61z", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Qual o resultado do corte pelo GFD?", answer: "Desliga o sistema por segurança.", orderIndex: 365 },
  
  { id: "366", itemNumber: "62a", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "O que é HVJB(high Voltage Junction Box)?", answer: "Caixa de junção de alta voltagem.", orderIndex: 366 },
  { id: "367", itemNumber: "62a", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Qual a função do HVJB?", answer: "Monitorar alimentação de alta tensão e abrigar GFD.", orderIndex: 367 },
  { id: "368", itemNumber: "62a", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "O que o HVJB também faz?", answer: "Terminação do deck cable e conexão de alta tensão + fibra óptica.", orderIndex: 368 },
  
  { id: "369", itemNumber: "62b", category: "Segurança", question: "O que é o Sistema de segurança(Protecao de Tampa)?", answer: "Microchaves nas tampas.", orderIndex: 369 },
  { id: "370", itemNumber: "62b", category: "Segurança", question: "Qual a função da proteção de tampa?", answer: "Desligar sistema ao abrir incorretamente.", orderIndex: 370 },
  { id: "371", itemNumber: "62b", category: "Segurança", question: "Qual a proteção adicional da tampa?", answer: "Relés em série com o PDU.", orderIndex: 371 },
  { id: "372", itemNumber: "62b", category: "Segurança", question: "Qual o resultado do sistema de proteção de tampa?", answer: "Desarma o sistema automaticamente (sem ação do piloto).", orderIndex: 372 },
  
  { id: "373", itemNumber: "62c", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "O que é HVTU(Transformador)?", answer: "Unidade de transformação de alta tensão.", orderIndex: 373 },
  { id: "374", itemNumber: "62c", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Qual a função do HVTU?", answer: "Elevar a tensão elétrica.", orderIndex: 374 },
  { id: "375", itemNumber: "62c", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "O que o HVTU alimenta?", answer: "Motores (trifásico) e Eletrônica (bifásico).", orderIndex: 375 },
  { id: "376", itemNumber: "62c", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Qual o local do HVTU?", answer: "Normal: Control Van. Pode ficar externo (próximo ao LARS).", orderIndex: 376 },
  
  { id: "377", itemNumber: "62d", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "O que faz GFM(Monitor de Fuga)?", answer: "Monitora fuga de corrente na linha de alta tensão.", orderIndex: 377 },
  { id: "378", itemNumber: "62d", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Quais os componentes do GFM?", answer: "Resistores, Medidor (Ohms), Alarme, Sistema de corte.", orderIndex: 378 },
  { id: "379", itemNumber: "62d", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Qual a importância do GFM?", answer: "Detecta falhas na isolação da linha de alta tensão.", orderIndex: 379 },
  
  { id: "380", itemNumber: "62e", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Função Controle de Variaveis(Motor):", answer: "Monitorar rede elétrica do ROV.", orderIndex: 380 },
  { id: "381", itemNumber: "62e", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Qual o cuidado com limites muito baixos?", answer: "Desarma o sistema.", orderIndex: 381 },
  { id: "382", itemNumber: "62e", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Qual o cuidado com limites corretos?", answer: "Proteção do motor.", orderIndex: 382 },
  { id: "383", itemNumber: "62e", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Qual o risco se for mal configurado?", answer: "Pode comprometer todo o ROV.", orderIndex: 383 },
  
  { id: "384", itemNumber: "62f", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Entrada Distribuicao de Energia(PDU):", answer: "440V trifásico.", orderIndex: 384 },
  { id: "385", itemNumber: "62f", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Para onde a PDU distribui?", answer: "ROV, TMS, Eletrônica, Sistema de lançamento.", orderIndex: 385 },
  { id: "386", itemNumber: "62f", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Como é o controle da PDU?", answer: "Feito pelo piloto via painel.", orderIndex: 386 },
  
  { id: "387", itemNumber: "62g", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Função dos botoes de controle(PDU):", answer: "Acionar energia de alta potência.", orderIndex: 387 },
  { id: "388", itemNumber: "62g", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Como funcionam os botões de controle da PDU?", answer: "Botões 110V acionam contatores que liberam 440V para o sistema.", orderIndex: 388 },
  { id: "389", itemNumber: "62g", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Qual a segurança dos botões da PDU?", answer: "Controle indireto (baixa tensão → alta tensão).", orderIndex: 389 },
  
  { id: "390", itemNumber: "62h", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Por que usar Partida do motor(soft starter)?", answer: "Evitar pico de corrente na partida.", orderIndex: 390 },
  { id: "391", itemNumber: "62h", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Como funciona a partida do motor?", answer: "Partida progressiva (rampa), controlada digitalmente.", orderIndex: 391 },
  { id: "392", itemNumber: "62h", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Onde fica a partida do motor?", answer: "Dentro do PDU.", orderIndex: 392 },
  
  { id: "393", itemNumber: "62i", category: "Operação / Piloto / Classes de ROV", question: "Função principal do operador de ROV:", answer: "Operar e monitorar o sistema.", orderIndex: 393 },
  { id: "394", itemNumber: "62i", category: "Operação / Piloto / Classes de ROV", question: "Quais as responsabilidades do operador de ROV?", answer: "Checar funcionamento, Controlar direção e profundidade, Operar joystick, Seguir orientação do supervisor.", orderIndex: 394 },
  { id: "395", itemNumber: "62i", category: "Operação / Piloto / Classes de ROV", question: "O que o operador de ROV também faz?", answer: "Manutenção básica, Apoio técnico, Limpeza e conservação.", orderIndex: 395 },
  
  { id: "396", itemNumber: "62j", category: "Operação / Piloto / Classes de ROV", question: "Quais as classes dos ROVs?", answer: "Classe 1 – Observação, Classe 2 – Observação + pequenas cargas, Classe 3 – Work Class, Classe 4 – Trenchers, Classe 5 – AUV (Autônomos).", orderIndex: 396 },
  
  { id: "397", itemNumber: "62k", category: "Operação / Piloto / Classes de ROV", question: "Quais as Funcoes do ROV Classe 1?", answer: "Apenas inspeção.", orderIndex: 397 },
  { id: "398", itemNumber: "62k", category: "Operação / Piloto / Classes de ROV", question: "Quais as Funcoes do ROV Classe 2?", answer: "Inspeção + manipulação leve.", orderIndex: 398 },
  { id: "399", itemNumber: "62k", category: "Operação / Piloto / Classes de ROV", question: "Quais as Funcoes do ROV Classe 3?", answer: "Trabalhos de intervenção.", orderIndex: 399 },
  { id: "400", itemNumber: "62k", category: "Operação / Piloto / Classes de ROV", question: "Quais as Funcoes do ROV Classe 4?", answer: "Enterramento de cabos/linhas.", orderIndex: 400 },
  { id: "401", itemNumber: "62k", category: "Operação / Piloto / Classes de ROV", question: "Quais as Funcoes do ROV Classe 5?", answer: "Operação sem cabo.", orderIndex: 401 }
];
