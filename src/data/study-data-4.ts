import { StudyItem } from "../types/study";

export const studyData4: StudyItem[] = [
  { id: "263", itemNumber: "60u", category: "Tether / Conexões / Caixa de Terminações / QD / Nodes", question: "O que é o Chinese Finger?", answer: "Proteção/trava do cabo (tether).", orderIndex: 263 },
  { id: "264", itemNumber: "60u", category: "Tether / Conexões / Caixa de Terminações / QD / Nodes", question: "Qual a função do Chinese Finger?", answer: "Distribuir esforço mecânico no cabo.", orderIndex: 264 },
  { id: "265", itemNumber: "60u", category: "Tether / Conexões / Caixa de Terminações / QD / Nodes", question: "Existe regra de tamanho para o Chinese Finger?", answer: "Sim, mínimo de 10x o diâmetro do cabo.", orderIndex: 265 },
  
  { id: "266", itemNumber: "60v", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "O que são latches?", answer: "Sistema de travas entre ROV e TMS.", orderIndex: 266 },
  { id: "267", itemNumber: "60v", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Quantos tipos de latches existem?", answer: "Primário e secundário.", orderIndex: 267 },
  { id: "268", itemNumber: "60v", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Como funcionam as latches?", answer: "Energizado → abre. Desenergizado → fecha.", orderIndex: 268 },
  { id: "269", itemNumber: "60v", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Quantos atuadores as latches possuem?", answer: "4 (2 primários + 2 secundários).", orderIndex: 269 },
  
  { id: "270", itemNumber: "60w", category: "Operação / Piloto / Classes de ROV", question: "O que deve ser feito antes da mobilização?", answer: "Avaliar todos os fatores que podem afetar a operação.", orderIndex: 270 },
  { id: "271", itemNumber: "60w", category: "Operação / Piloto / Classes de ROV", question: "Quais riscos existem na mobilização?", answer: "Correnteza inadequada, Interferência de propulsores (DP), Proximidade de equipamentos (queimadores), Posição errada na embarcação.", orderIndex: 271 },
  { id: "272", itemNumber: "60w", category: "Operação / Piloto / Classes de ROV", question: "O que é swell?", answer: "Balanço do mar que dificulta operação.", orderIndex: 272 },
  { id: "273", itemNumber: "60w", category: "Operação / Piloto / Classes de ROV", question: "Qual o impacto do swell?", answer: "Pode impedir entrada/saída do ROV no TMS.", orderIndex: 273 },
  { id: "274", itemNumber: "60w", category: "Operação / Piloto / Classes de ROV", question: "Qual a conclusão sobre o ponto de lançamento?", answer: "Escolha errada do ponto de lançamento reduz a eficiência.", orderIndex: 274 },
  
  { id: "275", itemNumber: "60x", category: "Operação com ROV", question: "O que é Free Swimming?", answer: "Modo sem TMS ou gaiola.", orderIndex: 275 },
  { id: "276", itemNumber: "60x", category: "Operação com ROV", question: "Como o ROV é conectado em Free Swimming?", answer: "Direto ao LARS pelo umbilical.", orderIndex: 276 },
  { id: "277", itemNumber: "60x", category: "Operação com ROV", question: "Qual a característica principal do Free Swimming?", answer: "Operação mais direta, porém menos controlada.", orderIndex: 277 },
  
  { id: "278", itemNumber: "60y", category: "Tether / Conexões / Caixa de Terminações / QD / Nodes", question: "O que é o tether?", answer: "Cabo que liga o ROV à superfície.", orderIndex: 278 },
  { id: "279", itemNumber: "60y", category: "Tether / Conexões / Caixa de Terminações / QD / Nodes", question: "O que o tether transporta?", answer: "Energia (cobre) e Dados (fibra óptica).", orderIndex: 279 },
  { id: "280", itemNumber: "60y", category: "Tether / Conexões / Caixa de Terminações / QD / Nodes", question: "Qual outra função do tether?", answer: "Permitir controle e movimentação do ROV.", orderIndex: 280 },
  
  { id: "281", itemNumber: "60z", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Quais são os modos de operação (lançamento)?", answer: "TMS, Gaiola (Cage), Free Swimming.", orderIndex: 281 },
  { id: "282", itemNumber: "60z", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Qual a diferença principal entre os modos de operação?", answer: "Nível de controle e proteção do ROV.", orderIndex: 282 },
  
  { id: "283", itemNumber: "61a", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Quais são os tipos de lançamento?", answer: "Por sobre a borda, Pelo Moon Pool.", orderIndex: 283 },
  { id: "284", itemNumber: "61a", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Qual a vantagem do Moon Pool?", answer: "Mais estabilidade (menos impacto de ondas).", orderIndex: 284 },
  
  { id: "285", itemNumber: "61b", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Para que serve a reterminacao do cabo armado?", answer: "Unir o cabo ao sistema (Bullet).", orderIndex: 285 },
  { id: "286", itemNumber: "61b", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Como é feita a reterminacao?", answer: "Com resina epóxi (Wirelock).", orderIndex: 286 },
  { id: "287", itemNumber: "61b", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "O que é importante na reterminacao?", answer: "A resina penetrar entre os arames.", orderIndex: 287 },
  { id: "288", itemNumber: "61b", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Após o processo de reterminacao?", answer: "Realizar teste de carga.", orderIndex: 288 },
  
  { id: "289", itemNumber: "61c", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "O que é TMS?", answer: "Sistema de gerenciamento do tether.", orderIndex: 289 },
  { id: "290", itemNumber: "61c", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Qual a função principal do TMS?", answer: "Controlar cabo, energia, dados e vídeo.", orderIndex: 290 },
  { id: "291", itemNumber: "61c", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Qual o benefício do TMS?", answer: "Reduz impacto do movimento do navio (heave).", orderIndex: 291 },
  { id: "292", itemNumber: "61c", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Qual o resultado do uso do TMS?", answer: "Melhor manobrabilidade do ROV.", orderIndex: 292 },
  
  { id: "293", itemNumber: "61d", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "O que é o Bullet?", answer: "Ponto de sustentação do cabo armado.", orderIndex: 293 },
  { id: "294", itemNumber: "61d", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Qual função do Bullet?", answer: "Suportar o peso do TMS + ROV.", orderIndex: 294 },
  { id: "295", itemNumber: "61d", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Como funciona o Bullet?", answer: "Arames fixados com resina epóxi, parte elétrica continua até o sistema.", orderIndex: 295 },
  
  { id: "296", itemNumber: "61e", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "O que deve ser feito com o cabo armado?", answer: "Lubrificação constante.", orderIndex: 296 },
  { id: "297", itemNumber: "61e", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Por que lubrificar o cabo?", answer: "Evitar desgaste no ambiente marinho.", orderIndex: 297 },
  { id: "298", itemNumber: "61e", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "O que acontece sem manutenção do cabo?", answer: "Danos estruturais e falha do cabo.", orderIndex: 298 },
  
  { id: "299", itemNumber: "61f", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Onde é utilizado o Slip Ring( No TMS)?", answer: "Dentro do tambor do TMS.", orderIndex: 299 },
  { id: "300", itemNumber: "61f", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Para que serve o Slip Ring no TMS?", answer: "Permitir passagem de energia e dados com o tambor girando.", orderIndex: 300 },
  { id: "301", itemNumber: "61f", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Como o Slip Ring do TMS é protegido?", answer: "Imerso em óleo com sistema de compensação.", orderIndex: 301 },
  { id: "302", itemNumber: "61f", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Qual o resultado do Slip Ring no TMS?", answer: "Funciona no fundo do mar sem entrada de água.", orderIndex: 302 },
  
  { id: "303", itemNumber: "61g", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "O que o Slip Ring mantém?", answer: "Energia elétrica e fibra óptica.", orderIndex: 303 },
  { id: "304", itemNumber: "61g", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Como o Slip Ring funciona?", answer: "Transfere sinais mesmo com rotação do tambor.", orderIndex: 304 },
  { id: "305", itemNumber: "61g", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Como funciona a parte óptica do Slip Ring?", answer: "Usa prismas e espelhos (FORJ).", orderIndex: 305 },
  
  { id: "306", itemNumber: "61h", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Qual a função principal do cabo armado?", answer: "Sustentação + energia + dados.", orderIndex: 306 },
  { id: "307", itemNumber: "61h", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "O que o cabo armado transporta?", answer: "Energia elétrica, Telemetria, Fibra óptica.", orderIndex: 307 },
  { id: "308", itemNumber: "61h", category: "TMS / LARS / Guincho / A-Frame / Slip Ring / Umbilical", question: "Qual a importância do cabo armado?", answer: "Elemento essencial do sistema TMS/ROV.", orderIndex: 308 }
];
