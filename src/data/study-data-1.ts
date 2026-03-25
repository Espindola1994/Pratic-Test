import { StudyItem } from "../types/study";

export const categories = [
  "Ferramentas",
  "Skids e Interfaces",
  "Manipuladores",
  "Operação com ROV",
  "Navegação e Posicionamento",
  "Sensores",
  "Sistema Hidráulico",
  "Válvulas e Controle Hidráulico",
  "Reservatório / HCU / TCU / HPU",
  "Filtros / Óleo / Flushing / Purga / Compensação",
  "Tether / Conexões / Caixa de Terminações / QD / Nodes",
  "Garrafas Estanque / Atmosféricas / Compensadas",
  "Estrutura / Flutuabilidade / Lastro / Payload / Frame",
  "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical",
  "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM",
  "Segurança",
  "Operação / Piloto / Classes de ROV",
  "Manutenção Preventiva"
];

export const studyData: StudyItem[] = [
  { id: "1", itemNumber: "1", category: "Skids e Interfaces", question: "O que é a basket?", answer: "Uma cesta para transporte de ferramentas.", orderIndex: 1 },
  { id: "2", itemNumber: "1", category: "Skids e Interfaces", question: "Para que serve a basket?", answer: "Levar equipamentos até o fundo do mar.", orderIndex: 2 },
  { id: "3", itemNumber: "1", category: "Skids e Interfaces", question: "Qual vantagem da basket?", answer: "Reduz interrupções na operação.", orderIndex: 3 },
  { id: "4", itemNumber: "1", category: "Skids e Interfaces", question: "O que a basket pode transportar?", answer: "Ferramentas, interfaces e materiais.", orderIndex: 4 },
  
  { id: "5", itemNumber: "2", category: "Ferramentas", question: "O que são Rotary Tools?", answer: "Ferramentas rotativas usadas pelo ROV.", orderIndex: 5 },
  { id: "6", itemNumber: "2", category: "Ferramentas", question: "Para que servem as Rotary Tools?", answer: "Corte, lixamento e limpeza.", orderIndex: 6 },
  { id: "7", itemNumber: "2", category: "Ferramentas", question: "Qual a diferença das Rotary Tools para ferramentas comuns?", answer: "Funcionam com energia hidráulica.", orderIndex: 7 },
  { id: "8", itemNumber: "2", category: "Ferramentas", question: "Onde são usadas as Rotary Tools?", answer: "Operações simples no ambiente subsea.", orderIndex: 8 },
  
  { id: "9", itemNumber: "3", category: "Ferramentas", question: "O que é o Hot Stab?", answer: "Sistema de injeção hidráulica.", orderIndex: 9 },
  { id: "10", itemNumber: "3", category: "Ferramentas", question: "Para que serve o Hot Stab?", answer: "Injetar fluidos com pressão controlada.", orderIndex: 10 },
  { id: "11", itemNumber: "3", category: "Ferramentas", question: "Quais aplicações principais do Hot Stab?", answer: "Testes de vedação, acionamento hidráulico e injeção de químicos.", orderIndex: 11 },
  { id: "12", itemNumber: "3", category: "Ferramentas", question: "Por que o Hot Stab é necessário?", answer: "Manipuladores sozinhos não conseguem executar essas funções.", orderIndex: 12 },
  
  { id: "13", itemNumber: "4", category: "Ferramentas", question: "Qual a função das ferramentas de jateamento e dragagem?", answer: "Remover sedimentos e detritos do fundo.", orderIndex: 13 },
  { id: "14", itemNumber: "4", category: "Ferramentas", question: "Em quais situações as ferramentas de jateamento e dragagem são utilizadas?", answer: "Usadas em desenterramento e limpeza.", orderIndex: 14 },
  { id: "15", itemNumber: "4", category: "Ferramentas", question: "Como funcionam as ferramentas de jateamento e dragagem?", answer: "Funcionam com jateamento e sucção combinados.", orderIndex: 15 },
  
  { id: "16", itemNumber: "6", category: "Skids e Interfaces", question: "O que são skids?", answer: "Estruturas acopladas ao ROV.", orderIndex: 16 },
  { id: "17", itemNumber: "6", category: "Skids e Interfaces", question: "Para que servem os skids?", answer: "Suportar e instalar ferramentas.", orderIndex: 17 },
  { id: "18", itemNumber: "6", category: "Skids e Interfaces", question: "Qual capacidade dos skids?", answer: "Até cerca de 3000 kg.", orderIndex: 18 },
  { id: "19", itemNumber: "6", category: "Skids e Interfaces", question: "Qual benefício principal dos skids?", answer: "Evita parar operações para troca de ferramentas.", orderIndex: 19 },
  
  { id: "20", itemNumber: "7", category: "Skids e Interfaces", question: "O que é a interface ISO?", answer: "Interface padrão para aplicação de torque.", orderIndex: 20 },
  { id: "21", itemNumber: "7", category: "Skids e Interfaces", question: "O que a interface ISO possui?", answer: "Encaixe quadrado interno.", orderIndex: 21 },
  { id: "22", itemNumber: "7", category: "Skids e Interfaces", question: "Qual função da interface ISO?", answer: "Acoplar ferramentas com segurança.", orderIndex: 22 },
  { id: "23", itemNumber: "7", category: "Skids e Interfaces", question: "O que a interface ISO garante?", answer: "Travamento mecânico e operação estável.", orderIndex: 23 },
  
  { id: "24", itemNumber: "7b", category: "Manipuladores", question: "Quais são os principais manipuladores?", answer: "Titan 4, Atlas 7R e Rigmaster.", orderIndex: 24, sourceBlock: "7" },
  { id: "25", itemNumber: "7b", category: "Manipuladores", question: "Quantas funções os manipuladores possuem?", answer: "Titan 4 e Atlas 7R → 7 funções. Rigmaster → 5 funções.", orderIndex: 25, sourceBlock: "7" },
  { id: "26", itemNumber: "7b", category: "Manipuladores", question: "Qual a profundidade suportada?", answer: "Titan 4 → até 4.000m. Rigmaster → até 6.500m.", orderIndex: 26, sourceBlock: "7" },
  { id: "27", itemNumber: "7b", category: "Manipuladores", question: "Qual o diferencial do Rigmaster?", answer: "Configurações de garra intercambiáveis e extensão de braço.", orderIndex: 27, sourceBlock: "7" },
  
  { id: "28", itemNumber: "8", category: "Skids e Interfaces", question: "Quantas formas de transporte de ferramentas com ROV existem?", answer: "Quatro principais: Pelo manipulador, Acoplada ao skid, Dentro de tooling skid, Por cesta (guindaste).", orderIndex: 28 },
  { id: "29", itemNumber: "8", category: "Skids e Interfaces", question: "Quando usar manipulador para transporte?", answer: "Ferramentas leves.", orderIndex: 29 },
  { id: "30", itemNumber: "8", category: "Skids e Interfaces", question: "Quando usar cesta para transporte?", answer: "Ferramentas grandes ou pesadas.", orderIndex: 30 },
  
  { id: "31", itemNumber: "9", category: "Operação com ROV", question: "Quantos tipos de operação com ROV existem?", answer: "Dois. Direta e indireta.", orderIndex: 31 },
  { id: "32", itemNumber: "9", category: "Operação com ROV", question: "O que é operação direta?", answer: "Feita diretamente pelo manipulador.", orderIndex: 32 },
  { id: "33", itemNumber: "9", category: "Operação com ROV", question: "O que é operação indireta?", answer: "Controlada por sistemas hidráulicos/elétricos.", orderIndex: 33 },
  
  { id: "34", itemNumber: "10", category: "Manipuladores", question: "Quantas funções possui o manipulador avançado (ex: Titan 4)?", answer: "7 funções (7 graus de liberdade).", orderIndex: 34 },
  { id: "35", itemNumber: "10", category: "Manipuladores", question: "Quais são os movimentos das 7 funções?", answer: "Jaw, Wrist, Yaw, Pitch, Elbow, Shoulder, Azimuth.", orderIndex: 35 },
  { id: "36", itemNumber: "10", category: "Manipuladores", question: "Para que servem esses movimentos?", answer: "Permitir movimentos completos do braço.", orderIndex: 36 },
  { id: "37", itemNumber: "10", category: "Manipuladores", question: "Qual vantagem das 7 funções?", answer: "Alta precisão e flexibilidade.", orderIndex: 37 },
  
  { id: "38", itemNumber: "11", category: "Manipuladores", question: "O que é o Master Controller?", answer: "Controle principal do manipulador.", orderIndex: 38 },
  { id: "39", itemNumber: "11", category: "Manipuladores", question: "Quantos graus de liberdade o Master Controller replica?", answer: "6 graus de liberdade.", orderIndex: 39 },
  { id: "40", itemNumber: "11", category: "Manipuladores", question: "Quais funções o Master Controller possui?", answer: "Controle, menu, diagnóstico e status.", orderIndex: 40 },
  { id: "41", itemNumber: "11", category: "Manipuladores", question: "Quais recursos avançados do Master Controller?", answer: "Programação, travamento de movimentos e segurança.", orderIndex: 41 },
  
  { id: "42", itemNumber: "12", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "O que é telemetria no ROV?", answer: "Sistema de comunicação entre superfície e fundo.", orderIndex: 42 },
  { id: "43", itemNumber: "12", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "Como funciona a telemetria?", answer: "Via cabo (tether) com sinais e dados.", orderIndex: 43 },
  { id: "44", itemNumber: "12", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "O controle é independente?", answer: "Sim, controle mestre na superfície.", orderIndex: 44 },
  { id: "45", itemNumber: "12", category: "Sistema Elétrico / Telemetria / PDU / HVTU / HVJB / GFD / GFM", question: "O manipulador possui sistema próprio de telemetria?", answer: "Sim, com válvulas e compensador hidráulico.", orderIndex: 45 },
  
  { id: "46", itemNumber: "13", category: "Manipuladores", question: "Quantas funções possui o manipulador principal (rateado/microprocessado dependendo do modelo)?", answer: "7 funções.", orderIndex: 46 },
  { id: "47", itemNumber: "13", category: "Manipuladores", question: "Como é alimentado o manipulador de 7 funções?", answer: "Sistema hidráulico (3000 psi).", orderIndex: 47 },
  { id: "48", itemNumber: "13", category: "Manipuladores", question: "Como se comunica o manipulador de 7 funções?", answer: "Via telemetria entre superfície e fundo.", orderIndex: 48 },
  { id: "49", itemNumber: "13", category: "Manipuladores", question: "Qual diferencial do manipulador com servo-válvulas?", answer: "Movimentos suaves com servo-válvulas.", orderIndex: 49 },
  
  { id: "50", itemNumber: "14", category: "Manipuladores", question: "Como o Rigmaster é alimentado?", answer: "Pelo HCU (sistema hidráulico).", orderIndex: 50 },
  { id: "51", itemNumber: "14", category: "Manipuladores", question: "Quantas mangueiras utiliza o Rigmaster?", answer: "10 mangueiras de controle.", orderIndex: 51 },
  { id: "52", itemNumber: "14", category: "Manipuladores", question: "Qual pressão de trabalho do Rigmaster?", answer: "3000 psi.", orderIndex: 52 },
  { id: "53", itemNumber: "14", category: "Manipuladores", question: "Qual sistema de proteção o Rigmaster possui?", answer: "Válvulas contra sobrecarga.", orderIndex: 53 },
  
  { id: "54", itemNumber: "15", category: "Manipuladores", question: "Para que servem os manipuladores no ROV?", answer: "Para realizar intervenções submarinas.", orderIndex: 54 },
  { id: "55", itemNumber: "15", category: "Manipuladores", question: "Quais são as principais intervenções feitas por manipuladores?", answer: "Abrir/fechar válvulas, Cortar cabos de aço, Manusear cabos, Conectar equipamentos, Posicionar transponders.", orderIndex: 55 },
  { id: "56", itemNumber: "15", category: "Manipuladores", question: "Por que as intervenções por manipuladores são importantes?", answer: "Permite manutenção e operação no fundo do mar.", orderIndex: 56 },
  
  { id: "57", itemNumber: "16", category: "Navegação e Posicionamento", question: "O que mostram as telas de navegação?", answer: "Posição do ROV, navio e estruturas.", orderIndex: 57 },
  { id: "58", itemNumber: "16", category: "Navegação e Posicionamento", question: "Qual referência da tela de navegação?", answer: "Parte superior = Norte geográfico.", orderIndex: 58 },
  { id: "59", itemNumber: "16", category: "Navegação e Posicionamento", question: "Para que servem as telas de navegação?", answer: "Auxiliar o piloto na navegação.", orderIndex: 59 },
  
  { id: "60", itemNumber: "17", category: "Manipuladores", question: "Quantos manipuladores um ROV possui normalmente?", answer: "Dois.", orderIndex: 60 },
  { id: "61", itemNumber: "17", category: "Manipuladores", question: "Qual a função de cada manipulador (5 e 7 funções)?", answer: "5 funções → tarefas simples. 7 funções → tarefas de precisão.", orderIndex: 61 },
  { id: "62", itemNumber: "17", category: "Manipuladores", question: "Qual a vantagem de ter dois manipuladores de tipos diferentes?", answer: "Alta destreza e força.", orderIndex: 62 },
  
  { id: "63", itemNumber: "18", category: "Manipuladores", question: "Quais os tipos principais de Manipuladores?", answer: "Microprocessados e Rateados.", orderIndex: 63 },
  { id: "64", itemNumber: "18", category: "Manipuladores", question: "O que são manipuladores microprocessados?", answer: "Controle proporcional → movimentos suaves.", orderIndex: 64 },
  { id: "65", itemNumber: "18", category: "Manipuladores", question: "O que são manipuladores rateados?", answer: "Controle por solenóides → movimentos mais bruscos.", orderIndex: 65 },
  { id: "66", itemNumber: "18", category: "Manipuladores", question: "Qual manipulador é mais preciso?", answer: "Microprocessado.", orderIndex: 66 },
  
  { id: "67", itemNumber: "19", category: "Navegação e Posicionamento", question: "O que são Transponder, Responder e Beacon?", answer: "Dispositivos acústicos de posicionamento.", orderIndex: 67 },
  { id: "68", itemNumber: "19", category: "Navegação e Posicionamento", question: "O que faz o transponder?", answer: "Responde ao pulso recebido.", orderIndex: 68 },
  { id: "69", itemNumber: "19", category: "Navegação e Posicionamento", question: "O que faz o responder?", answer: "Semelhante ao transponder, mas com diferença na comunicação.", orderIndex: 69 },
  { id: "70", itemNumber: "19", category: "Navegação e Posicionamento", question: "O que é um beacon?", answer: "Transponder de grande autonomia.", orderIndex: 70 },
  { id: "71", itemNumber: "19", category: "Navegação e Posicionamento", question: "Como funcionam Transponder, Responder e Beacon?", answer: "Usam ultrassom na água.", orderIndex: 71 },
  
  { id: "72", itemNumber: "20", category: "Navegação e Posicionamento", question: "O que é HPR(Posicionamento Hidroacústico)?", answer: "Sistema que calcula posição no fundo do mar.", orderIndex: 72 },
  { id: "73", itemNumber: "20", category: "Navegação e Posicionamento", question: "Como funciona o HPR?", answer: "Usa sinais acústicos entre transmissor e receptor.", orderIndex: 73 },
  { id: "74", itemNumber: "20", category: "Navegação e Posicionamento", question: "Onde o HPR é usado?", answer: "ROV, embarcações e plataformas.", orderIndex: 74 },
  { id: "75", itemNumber: "20", category: "Navegação e Posicionamento", question: "Qual vantagem do HPR?", answer: "Alta precisão de posicionamento.", orderIndex: 75 },
  
  { id: "76", itemNumber: "21", category: "Navegação e Posicionamento", question: "Para que serve o DVL?", answer: "Posicionamento automático do ROV.", orderIndex: 76 },
  { id: "77", itemNumber: "21", category: "Navegação e Posicionamento", question: "Como funciona o DVL?", answer: "Usa sensores acústicos.", orderIndex: 77 },
  { id: "78", itemNumber: "21", category: "Navegação e Posicionamento", question: "O que o DVL mede?", answer: "Movimento em X, Y e Z.", orderIndex: 78 },
  { id: "79", itemNumber: "21", category: "Navegação e Posicionamento", question: "Qual limitação do DVL?", answer: "Perde precisão longe do fundo.", orderIndex: 79 },
  
  { id: "80", itemNumber: "22", category: "Sensores", question: "O que é o altímetro?", answer: "Mede distância do ROV ao fundo.", orderIndex: 80 },
  { id: "81", itemNumber: "22", category: "Sensores", question: "Como funciona o altímetro?", answer: "Igual ao sonar (eco).", orderIndex: 81 },
  { id: "82", itemNumber: "22", category: "Sensores", question: "Para que serve o altímetro?", answer: "Evitar colisões e controlar altura.", orderIndex: 82 },
  
  { id: "83", itemNumber: "23", category: "Sensores", question: "O que é o Fluxgate?", answer: "Sensor de direção (bússola avançada).", orderIndex: 83 },
  { id: "84", itemNumber: "23", category: "Sensores", question: "Para que serve o Fluxgate?", answer: "Corrigir direção do ROV.", orderIndex: 84 },
  { id: "85", itemNumber: "23", category: "Sensores", question: "Qual vantagem do Fluxgate?", answer: "Leitura digital precisa.", orderIndex: 85 },
  { id: "86", itemNumber: "23", category: "Sensores", question: "Como o Fluxgate deve ser instalado?", answer: "Na posição horizontal.", orderIndex: 86 },
  
  { id: "87", itemNumber: "24", category: "Navegação e Posicionamento", question: "Quais sistemas de navegacao trabalham juntos?", answer: "HPR, DVL, Altímetro, Fluxgate.", orderIndex: 87 },
  { id: "88", itemNumber: "24", category: "Navegação e Posicionamento", question: "Para que servem os sistemas de navegação juntos?", answer: "Garantir navegação precisa.", orderIndex: 88 },
  { id: "89", itemNumber: "24", category: "Navegação e Posicionamento", question: "Qual o resultado final do uso conjunto dos sistemas de navegação?", answer: "Controle total do ROV no fundo do mar.", orderIndex: 89 },
  
  { id: "90", itemNumber: "25", category: "Sensores", question: "O que são Strobe Lights?", answer: "Luzes piscantes de sinalização.", orderIndex: 90 },
  { id: "91", itemNumber: "25", category: "Sensores", question: "Para que servem as Strobe Lights?", answer: "Localizar e resgatar o ROV.", orderIndex: 91 },
  { id: "92", itemNumber: "25", category: "Sensores", question: "Como funcionam as Strobe Lights?", answer: "Piscam continuamente, principalmente no escuro.", orderIndex: 92 },
  { id: "93", itemNumber: "25", category: "Sensores", question: "Como são alimentadas as Strobe Lights?", answer: "Bateria interna ou sistema do ROV.", orderIndex: 93 },
  
  { id: "94", itemNumber: "26", category: "Sensores", question: "O que significa SONAR?", answer: "Sound Navigation And Ranging.", orderIndex: 94 },
  { id: "95", itemNumber: "26", category: "Sensores", question: "Como funciona o SONAR?", answer: "Emite som → bate no objeto → retorna.", orderIndex: 95 },
  { id: "96", itemNumber: "26", category: "Sensores", question: "O que o SONAR informa?", answer: "Distância e forma dos objetos.", orderIndex: 96 },
  { id: "97", itemNumber: "26", category: "Sensores", question: "Para que serve o SONAR?", answer: "Navegação e evitar obstáculos.", orderIndex: 97 },
  
  { id: "98", itemNumber: "27", category: "Sensores", question: "O que faz o Depth Sensor?", answer: "Mede a profundidade do ROV.", orderIndex: 98 },
  { id: "99", itemNumber: "27", category: "Sensores", question: "Como funciona o Depth Sensor?", answer: "Detecta pressão da água.", orderIndex: 99 },
  { id: "100", itemNumber: "27", category: "Sensores", question: "Quando o Depth Sensor deve ser calibrado?", answer: "No início de cada mergulho.", orderIndex: 100 },
  { id: "101", itemNumber: "27", category: "Sensores", question: "O que evitar na instalação do Depth Sensor?", answer: "Água turbulenta (próximo aos propulsores).", orderIndex: 101 },
  
  { id: "102", itemNumber: "28", category: "Sensores", question: "O que é o Gyro?", answer: "Bússola eletrônica.", orderIndex: 102 },
  { id: "103", itemNumber: "28", category: "Sensores", question: "O que é o Fluxgate (no contexto do Gyro)?", answer: "Sensor que corrige o campo magnético.", orderIndex: 103 },
  { id: "104", itemNumber: "28", category: "Sensores", question: "Qual diferença importante entre norte magnético e geográfico?", answer: "Norte magnético ≠ Norte geográfico.", orderIndex: 104 },
  { id: "105", itemNumber: "28", category: "Sensores", question: "Qual a função do Fluxgate em relação ao norte?", answer: "Corrigir esse erro automaticamente.", orderIndex: 105 },
  
  { id: "106", itemNumber: "29", category: "Reservatório / HCU / TCU / HPU", question: "O que é a TCU?", answer: "Unidade de controle dos propulsores.", orderIndex: 106 },
  { id: "107", itemNumber: "29", category: "Reservatório / HCU / TCU / HPU", question: "Para que serve a TCU?", answer: "Controlar direção e força do ROV.", orderIndex: 107 },
  { id: "108", itemNumber: "29", category: "Reservatório / HCU / TCU / HPU", question: "O que a TCU controla?", answer: "Fluxo hidráulico para os thrusters.", orderIndex: 108 },
  
  { id: "109", itemNumber: "30", category: "Válvulas e Controle Hidráulico", question: "O que são válvulas direcionais (30)?", answer: "Controlam o fluxo do fluido.", orderIndex: 109, isDuplicate: true },
  { id: "110", itemNumber: "30", category: "Válvulas e Controle Hidráulico", question: "O que significa 4/3 nas válvulas?", answer: "4 vias e 3 posições.", orderIndex: 110, isDuplicate: true },
  { id: "111", itemNumber: "30", category: "Válvulas e Controle Hidráulico", question: "O que é centro fechado nas válvulas?", answer: "Bloqueia todas as passagens.", orderIndex: 111, isDuplicate: true },
  { id: "112", itemNumber: "30", category: "Válvulas e Controle Hidráulico", question: "Para que servem as válvulas direcionais no ROV?", answer: "Controlar movimentos (ex: manipuladores).", orderIndex: 112, isDuplicate: true },
  
  { id: "113", itemNumber: "31", category: "Válvulas e Controle Hidráulico", question: "O que são válvulas direcionais? (Repetição)", answer: "Controlam o fluxo do fluido.", orderIndex: 113, isDuplicate: true },
  { id: "114", itemNumber: "31", category: "Válvulas e Controle Hidráulico", question: "O que significa 4/3? (Repetição)", answer: "4 vias e 3 posições.", orderIndex: 114, isDuplicate: true },
  { id: "115", itemNumber: "31", category: "Válvulas e Controle Hidráulico", question: "O que é centro fechado? (Repetição)", answer: "Bloqueia todas as passagens.", orderIndex: 115, isDuplicate: true },
  { id: "116", itemNumber: "31", category: "Válvulas e Controle Hidráulico", question: "Para que servem no ROV? (Repetição)", answer: "Controlar movimentos (ex: manipuladores).", orderIndex: 116, isDuplicate: true },
  
  { id: "117", itemNumber: "32", category: "Sistema Hidráulico", question: "Quais os principais componentes do sistema hidraulico do rov?", answer: "Bomba (HPU), Reservatório, TCU, Válvulas, Atuadores.", orderIndex: 117 },
  { id: "118", itemNumber: "32", category: "Sistema Hidráulico", question: "Como funciona o sistema hidráulico?", answer: "Bomba pressuriza → válvulas direcionam → atuadores executam.", orderIndex: 118 },
  { id: "119", itemNumber: "32", category: "Sistema Hidráulico", question: "Para que serve o sistema hidráulico?", answer: "Mover braços, ferramentas e propulsores.", orderIndex: 119 },
  
  { id: "120", itemNumber: "33", category: "Sistema Hidráulico", question: "Quais são os tipos de linhas do sistema hidraulico?", answer: "Pressão, Retorno, Dreno.", orderIndex: 120 },
  { id: "121", itemNumber: "33", category: "Sistema Hidráulico", question: "Qual a função da linha de Pressão?", answer: "Envia força.", orderIndex: 121 },
  { id: "122", itemNumber: "33", category: "Sistema Hidráulico", question: "Qual a função da linha de Retorno?", answer: "Volta do fluido.", orderIndex: 122 },
  { id: "123", itemNumber: "33", category: "Sistema Hidráulico", question: "Qual a função da linha de Dreno?", answer: "Alívio/segurança.", orderIndex: 123 },
  
  { id: "124", itemNumber: "34", category: "Reservatório / HCU / TCU / HPU", question: "O que é o reservatório do ROV?", answer: "Tanque que armazena o óleo hidráulico.", orderIndex: 124 },
  { id: "125", itemNumber: "34", category: "Reservatório / HCU / TCU / HPU", question: "Para que serve o reservatório?", answer: "Alimentar todo o sistema hidráulico do ROV.", orderIndex: 125 },
  { id: "126", itemNumber: "34", category: "Reservatório / HCU / TCU / HPU", question: "Quais sistemas o reservatório alimenta?", answer: "Propulsores, Manipuladores, Ferramentas.", orderIndex: 126 },
  { id: "127", itemNumber: "34", category: "Reservatório / HCU / TCU / HPU", question: "Qual a capacidade do reservatório no exemplo?", answer: "19,7 litros.", orderIndex: 127 },
  { id: "128", itemNumber: "34", category: "Reservatório / HCU / TCU / HPU", question: "O que são compensadores (no contexto do reservatório)?", answer: "Dispositivos que equilibram a pressão interna com a externa.", orderIndex: 128 },
  
  { id: "129", itemNumber: "35", category: "Reservatório / HCU / TCU / HPU", question: "O que é a HCU?", answer: "Unidade de controle hidráulico principal.", orderIndex: 129 },
  { id: "130", itemNumber: "35", category: "Reservatório / HCU / TCU / HPU", question: "Do que a HCU é composta?", answer: "Manifold com válvulas solenoides.", orderIndex: 130 },
  { id: "131", itemNumber: "35", category: "Reservatório / HCU / TCU / HPU", question: "O que a HCU controla?", answer: "Atuadores hidráulicos do ROV.", orderIndex: 131 },
  { id: "132", itemNumber: "35", category: "Reservatório / HCU / TCU / HPU", question: "Quais sistemas a HCU aciona?", answer: "Manipulador (ex: 5 funções), Ferramentas, Pan & Tilt (câmeras).", orderIndex: 132 },
  { id: "133", itemNumber: "35", category: "Reservatório / HCU / TCU / HPU", question: "Diferenca entre Reservatorio e HCU: O que o Reservatório faz?", answer: "Armazena o óleo.", orderIndex: 133 },
  { id: "134", itemNumber: "35", category: "Reservatório / HCU / TCU / HPU", question: "Diferenca entre Reservatorio e HCU: O que a HCU faz?", answer: "Controla para onde o óleo vai.", orderIndex: 134 }
];
