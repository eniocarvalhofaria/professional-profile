const INITIAL_STATE = {
    name:'Enio Carvalho de Faria',
    profileImageUrl:'enio-faria.jpg',
    role:{
        pt:'Engenheiro de Software e Dados', 
        en:'Data and Software Engineer'
    },
    contact: {
        phoneNumber:'+351 934 184 901',
        skypeId: 'live:enio.carvalho.faria',
        whatsApp: '+351 934 184 901',
        emailAddress: 'enio.carvalho.faria@gmail.com',
        },
    locationTarget:{
        pt:'Farfetch, trabalho remotamente (Home Office)', 
        en:'Farfetch, remote working'       
    },
    summary:{
        pt:'Oi, eu sou o Enio. Tenho 19 anos de experiência a desenvolver soluções para o negócio. Neste último ano tenho estado concentrado em desenvolver soluções tecnológicas voltadas para Data Governance: Extração de dados e metadados, transformação, carga, aplicar regras de negócio, conciliação, linhagem dos dados, etc. Tenho experiência também em desenvolvimento web. Reserve alguns minutos para ler meu CV que perceberás minhas competências diferenciadas. Se quiseres me conhecer, terei prazer em falar-te sobre a minha trajetória profissional.',
        en:'Hi, I\'m Enio. I have 19 years of experience developing solutions for the business. In the last year I have been focused on developing technological solutions driven on Data Governance: Extraction of data and metadata, transformation, loading, applying business rules, reconciliation, data lineage, etc. I also have experience in web development. Take a few minutes to read my CV and you will understand my differentiated skills. If you want to know me, I would be happy to talk to you about my professional career.'
    },
    professionalExperience:[
        {
            start:{month:10, year:2019},
            company:{
                name:'Farfetch',
                logoUrl:'farfetch.jpg',
                info: {
                    pt:'Farfetch é uma empresa de e-commerce de moda de luxo que vende marcas fomosas e moda premium.',
                    en:'Farfetch is a luxury fashion e-commerce company that sells premium brands and premium fashion.'
                }
            },
            role:{
                pt:'Administrador de dados | Engenheiro de Dados | Engenheiro de Integrações com o Collibra', 
                en:'Data Steward | Data Engineer | Collibra Integration Engineer'
            },
            summary:{
                pt:'Desenvolvimento de processos que garantam a governança dos dados da empresa, seja no aspecto das informações sobre os dados, da compreensão dos dados, da aderência às leis europeias sobre dados (GDPR), etc.',
                en:'Processes development that ensure the governance of company data: Metadata, data understanding, compliance with European data laws (GDPR), etc.'
            },
            activities:[
                {
                    pt: 'Mapeamento dos metadados da empresa, extração e armazenamento' 
                ,   en: 'Company metadata mapping, extracting and storage.'
                },
                {
                    pt: 'Importação de metadados no Collibra' 
                ,   en: 'Import metadata in Collibra.'
                },
                {
                    pt: 'Criação de processos automatizados.' 
                ,   en: 'Creation of automated processes.'
                },
                {
                    pt: 'Desenvolvimento de Workflows no Collibra.' 
                ,   en: 'Development of Workflows in Collibra.'
                },
                {
                    pt: 'Mapeamento e construção da linhagem dos dados (origens e destinos).' 
                ,   en: 'Mapping and development the data lineage (sources and targets).'
                },
                {
                    pt: 'Suporte ao projeto de Qualidade dos Dados.' 
                ,   en: 'Data Quality project support.'
                },
            ],
            projects:[
                {
                    name:{pt:'Plataforma tecnológica de Data Governance',en:'Data Governance Framework'}
                ,   summary:{
                        pt:'Plataforma tecnológica para automatizar o máximo de atividades possíveis de Data Governance. A solução possui 3 pontos possíveis de entrada: Web API, Interface de Linha de Comando, e um executor de tarefas geradas no Collibra. A plataforma faz extrações de metadados com extrema resiliência, valida e carrega os dados no Collibra, além de gerar a linhagem de dados entre diversos tipos de objetos e também carregar isto no Collibra.',
                        en:'Framework to automate as many Data Governance activities as possible. The solution has 3 possible entry points: Web API, Command Line Interface, and an executor of tasks generated in Collibra. The platform extracts metadata with extreme resilience, validates and loads data into Collibra, in addition to generating data lineage between different types of objects and also loading this into Collibra.'
                    }
                ,   activities:[
                        {pt: 'Arquiteto da solução' , en: 'Solution architect'}
                    ,   {pt: 'Desenvolvedor' , en: 'Developer'}
                    ],
                    technologies:[
                        'C#'
                    ,   '.net Core'
                    ,   'Collibra DGC'
                    ,   'Collibra REST API'
                    ,   'Collibra Import API'
                    ,   'Collibra Workflows'
                    ,   'MongoDB'
                    ,   'Google Big Query REST API'
                    ,   'Looker REST API'
                    ,   'Azure Data Lake Storage (ADLS)'
                    ,   'Apache Avro'
                    ,   'Web HDFS'
                    ,   'API'
                    ,   'JWT'
                    ,   'Swagger'
                    ],
                    results:[]
                },
            ]
            
        },
        {
            start:{month:5, year:2018},
            end:{month:10, year:2019},
            company:{
                name:'W4People',
                logoUrl:'w4.png',
                info: {
                    pt:'A W4People é uma startup de busca de prestadores de serviço. Ao informar a morada e o tipo de serviço que precisa, a plataforma retorna uma lista de prestadores relacionados a busca com diversas informações pertinentes.',
                    en:'W4People is a service provider search startup. By entering the address and type of service it needs, the platform returns a list of search-related providers with various pertinent information.'
                }
            },
            role:{
                pt:'Sócio-Fundador | Full Stack Developer | Analista de Negócio', 
                en:'Founding-Partner | Full Stack Developer | Business Analyst'
            },
            summary:{
                pt:'Desenvolvimento completo da plataforma de busca da companhia.',
                en:'Complete development of enterprise search platform.'
            },
            activities:[
                {pt: 'Arquiteto da solução' , en: 'Solution archtect'}
                ,{pt: 'Desenvolvimento do Back end (C#, .net Core)' , en: 'Back end development (C#, .net core)'}
                ,{pt: 'Desenvolvimento do Front end (HTML, JavaScript, CSS, Razor)' , en: 'Front end development (HTML, Javascript, CSS)'}
                ,{pt: 'Desenvolvimento do banco de dados (Mongo DB)' , en: 'Database development (MongoDB)'}
                ,{pt: 'Desenvolvimento da API REST (C#)' , en: 'API REST development (C#)'}
                ,{pt: 'Implementação do Entity Framework' , en: 'Entity framework implementation'}
                ,{pt: 'Implementação da infraestrutura na nuvem (Azure)' , en: 'Cloud implementation (Azure)'}
                ,{pt: 'Desenvolvimento do website institucional (Word Press)' , en: 'Institutional website development (Word Press)'}
                ,{pt: 'Controle de código fonte (VSTS)' , en: 'Source code control (VSTS).'}
                ,{pt: 'Estratégia de SEO' , en: 'SEO Strategy'}
                 
                
            ],
            projects:[

            ]
            
        },
        {
            start:{month:10, year:2018},
            end:{month:11, year:2018},
            company:{
                name:'Deloitte',
                logoUrl:'deloitte.png',
                info: {
                    pt:'Deloitte é uma das "Big Four", designação dada as quatro maiores empresas de auditoria e consultoria do mundo.',
                    en:'Deloitte is one of the "Big Four", designation given to the four largest auditing and consulting firms in the world.'
                }
            },
            role:{
                pt:'Consultor Engenheiro de Dados (Projeto temporário)', 
                en:'Data Engineer Consultant (Temporary project)'
            },
            summary:{
                pt:'Desenvover ETL e conciliação de dados financeiros para um importante cliente.',
                en:'Develop ETL and financial data reconciliation for a important customer.'
            },
            activities:[
                {pt: 'Desenvolvimento do ETL (Sql, Sql Server, SSIS)' , en: 'ETL development (SQL, Sql Server)'}
            ,   {pt: 'Conciliação de dados (SQL, SqlServer)' , en: 'Data reconciliation (SQL, Sql Server)'}

            ],
            projects:[

            ]
            
        },
        {
            start:{month:11, year:2011},
            end:{month:5, year:2018},
            company:{
                name:'Peixe Urbano',
                logoUrl:'peixeurbano.png',
                info: {
                    pt:'Peixe Urbano é o maior site de venda de cupons de descontos do Brasil.',
                    en:'Peixe Urbano is the largest discount coupon sale site in Brazil.'
                }
            },
            role:{
                pt:'Especialista em Inteligência do Negócio', 
                en:'Business Intelligence Expert'
            },
            summary:{
                pt:'Estruturação da área de BI da companhia.',
                en:'Structuring the company\'s BI area.'
            },
            activities:[
                 {pt: 'Arquiteto da solução' , en: 'Solution architect'}
                ,{pt: 'Líder de equipe' , en: 'Team leader'}
                ,{pt: 'Desenvolvimento do ETL (Sql, Sql Server, SSIS)' , en: 'ETL development (C#,SQL, Sql server, Redshift, Mysql)'}
                ,{pt: 'Programação do Job scheduler' , en: 'Job scheduler programming (Visual Cron)'}
                ,{pt: 'Construção dos indicadores chave' , en: 'Building key performance indicators (SQL, Excel)'}
                ,{pt: 'Desenvolvimento de relatórios automatizados' , en: 'Automated reports development (C#, SQL, Excel)'}
                ,{pt: 'Desenvolvimento de relatórios interativos' , en: 'Interactive reports development (Excel, VBA)'}
                ,{pt: 'Controle de código fonte (SVN)' , en: 'Source code control (SVN)'}

                
            ],
            projects:[
                {
                    name:{pt:'Distribuidor de relatórios',en:'Report distributor'}, 
                    summary:{
                        pt:'Um serviço windows que para cada relatório existente, checa os logs de execução dos processos relativos a atualização de seus dados. Tendo constatado que existem novos dados, abre o arquivo excel relativo ao relatório, atualiza todas as conexões de dados, cria um email, anexa o arquivo excel, e envia para todos os endereços de emails que devem receber o relatório. Além disso, se especificado em arquivo de configuração, lê o conteúdo e formatação de cada célula de uma guia específica do excel, gera um HTML que corresponde exatamente ao conteúdo, e coloca este HTML no corpo do email, permitindo que as principais informações sejam vistas com facilidade em um telemóvel. As configurações permitem também que automaticamente dados sejam filtrados e cada pessoa receba apenas o conteúdo que lhe é permitido ter acesso.',
                        en:'A windows service that for each existing report checks the execution logs of the processes related to updating its data. Having found that there is new data, it opens the report excel file, updates all data connections, creates an email, attaches the excel file, and sends it to all email addresses that should receive the report. Also, if specified in a configuration file, reads the content and formatting of each cell from a specific excel tab, generates HTML that exactly matches the content, and places this HTML in the email body, allowing key information to be viewed easily on a mobile phone. The settings also allow data to be automatically filtered and each person to receive only the content allowed to them.'},
                    activities:[
                        {pt: 'Arquiteto da solução' , en: 'Solution architect'}
                    ,   {pt: 'Desenvolvedor' , en: 'Developer'}
                    ],
                    technologies:[
                        'C#'
                    ,   'Microsoft Office Interop Library'
                    ,   'ADO.net'
                    ,   'XML'
                    ,   'SQL'
                    ],
                    results:[]
                },
                {
                    name:{pt:'Campaign Maker (Construtor de campanhas)',en:'Campaign Maker'}, 
                    summary:{
                        pt:'Esta é uma aplicação para aumento de produtividade na construção de campanhas do Marketing. O que antes precisava de vários analistas, passou a poder ser feito por apenas um em poucos minutos.',
                        en:'This is an application for increase productivity in building Marketing campaigns. What previously needed several analysts could be done by just one in few minutes.'},
                    activities:[
                        {pt: 'Arquiteto da solução' , en: 'Solution architect'}
                    ,   {pt: 'Desenvolvedor' , en: 'Developer'}
                    ],
                    technologies:[
                        'C#'
                    ,   'API Client'
                    ,   'ADO.net'
                    ,   'HTML'
                    ,   'JSON'
                    ,   'SQL'
                    ],
                    results:[
                        {
                            type: 'before-after-table',
                            data:[
                                {
                                    description:{
                                        pt:'Extração da base de usuários alvo da campanha',
                                        en:'Campaign target user base extraction'},
                                    before:{
                                        pt:'Um analista deveria criar um SQL e rodava no banco de dados.',
                                        en:'An analyst should create an SQL and run in the database.'},
                                    after:{
                                        pt:'Na aplicação, através de um formulário com todas as opções de parâmetros de busca de usuários um analista sem necessidade de conhecimento técnico, parametrizava o formulário e apertava um botão.',
                                        en:'In the application, through a form with all options of user search parameters an analyst without the need for technical knowledge, parameterized the form and pressed a button.'}
                                },
                                {
                                    description:{
                                        pt:'Seleção das ofertas da campanha',
                                        en:'Selecting Campaign Offers'},
                                    before:{
                                        pt:'Um analista deveria consultar nos sistemas internos as ofertas referentes a campanha e armazenar manualmente as informações principais: URL da oferta, URL da imagem, Título da oferta, Descrição da oferta e Preço.',
                                        en:'An analyst should look at internal discount offers for the campaign and manually store key information: Offer URL, Image URL, Offer Title, Offer Description, and Price.'},
                                    after:{
                                    pt:'Através de uma tela que acessava a API originalmente desenvolvida para o aplicativo de telemóvel, um analista conseguia facilmente filtrar e marcar quais ofertas deveriam fazer parte da campanha.',
                                    en:'Through a screen that accessed the API originally developed for the mobile app, an analyst could easily filter and mark which offers should be part of the campaign.'}
                                },
                                {
                                    description:{
                                        pt:'Construção do email',
                                        en:'Email construction'},
                                    before:{
                                        pt:'No Dreamweaver, um designer montava o email da campanha, copiando e colando as informações de cada oferta e ajustando o layout de acordo com o conteúdo.',
                                        en:'In Dreamweaver, a designer would set up the campaign email, copying and pasting information from each offer and adjusting the layout according to the content.'},
                                    after:{
                                        pt:'Através de 2 caixas de listagem, um analista escolhia o template de corpo do email e de oferta que era gerado automaticamente a partir das ofertas selecionadas no passo anterior.',
                                        en:'Through 2 list boxes, an analyst chose the email and offer body template that was automatically generated from the offers selected in the previous step.'}
                                }
                            ]
                        },
                    ]
                },
                {
                    name:{pt:'Extrator do Salesforce',en:'Salesforce extractor'}, 
                    summary:{
                        pt:'Dois sistemas que trabalham em conjunto: O primeiro um sistema de extração de dados massivos do Salesforce desenvolvido em Java que gera arquivos XML dos dados extraídos. Devido a grande frequencia de quedas de conexão, o programa divide a requisição em pequenas partes, para que haja possibilidade de retomada da extração a partir de um ponto de checagem. O segundo um sistema de carga (C#) para o Data warehouse que trata os arquivos XML, converte em CSV, envia para o storage da Amazon (S3) e carrega no SGDB Redshift.',
                        en:'Two systems that work together: The first is a Salesforce bulk data extraction system developed in Java that generates XML files from the extracted data. Due to the high frequency of connection drops, the program divides the request into small parts so that extraction can be resumed from a checkpoint. The second, a data warehouse load system (C#) that handles XML files, converts to CSV, sends it to Amazon storage (S3), and loads into RDBMS Redshift.'},
                    activities:[
                        {pt: 'Arquiteto da solução' , en: 'Solution architect'}
                    ,   {pt: 'Desenvolvedor' , en: 'Developer'}
                    ],
                    technologies:[
                        'C#'
                    ,   'Java'
                    ,   'Salesforce API'
                    ,   'ADO.net'
                    ,   'XML'
                    ,   'AWSSDK'
                    ,   'Redshift'
                    ,   'SQL'
                    ],
                    results:[]
                },
                {
                    name:{pt:'Utilitário de carga para o Redshift',en:'Load utility for redshift'}, 
                    summary:{
                        pt:'Um sistema de carga (C#) para o Data warehouse que trata os arquivos TXT, converte em CSV, envia para o storage da Amazon (S3) e carrega no SGDB Redshift.',
                        en:'A data warehouse load system (C#) that handles TXT files, converts to CSV, sends it to Amazon storage (S3), and loads into RDBMS Redshift.'},
                    activities:[
                        {pt: 'Arquiteto da solução' , en: 'Solution architect'}
                    ,   {pt: 'Desenvolvedor' , en: 'Developer'}
                    ],
                    technologies:[
                        'C#'
                    ,   'ADO.net'
                    ,   'AWSSDK'
                    ,   'Redshift'
                    ,   'SQL'
                    ],
                    results:[]
                },
                {
                    name:{pt:'Executor de scripts',en:'Scripts executor'}, 
                    summary:{
                        pt:'Programa que executa scripts provendo todas as funcionalidade comuns às Stored Procedures, tais como: Variáveis, Cursor, Loops, If, Execução de SQL, etc. Foi desenvolvido pelo fato de o SGDB Redshift não possuir Stored Procedures na época do desenvolvimento.',
                        en:'Program that executes scripts providing all functionality common to Stored Procedures, such as: Variables, Cursor, Loops, If, SQL Execution, etc. It was developed because RDBMS Redshift did not have Stored Procedures at the time of development.'},
                    activities:[
                        {pt: 'Arquiteto da solução' , en: 'Solution architect'}
                    ,   {pt: 'Desenvolvedor' , en: 'Developer'}
                    ],
                    technologies:[
                        'C#'
                    ,   'ADO.net'
                    ],
                    results:[]
                },               
                {
                    name:{pt:'Extrator do Google Analytics',en:'Google Analytics extractor'}, 
                    summary:{
                        pt:'Programa de extração de dados do Google Analytics via API.',
                        en:'Google Analytics Data Extraction Program via API.'},
                    activities:[
                        {pt: 'Desenvolvedor' , en: 'Developer'}
                    ],
                    technologies:[
                        'C#'
                    ,   'Google Analytics API'
                    ,   'ADO.net'
                    ,   'SQL'
                    ],
                    results:[]
                },
                {
                    name:{pt:'Categorizador de ofertas',en:'Offer categorizer'}, 
                    summary:{
                        pt:'Programa que através de um histórico de ofertas categorizadas utilizava o algoritmo TFIDF para atribuir categorias às ofertas. A cada execução o programa aprendia a categorizar de forma mais precisa  (Aprendizagem de máquina).',
                        en:'Program that through a history of categorized offers used the TFIDF algorithm to assign categories to offers. With each execution the program learned to categorize more precisely (Machine Learning).'},
                    activities:[
                        {pt: 'Desenvolvedor' , en: 'Developer'}
                    ],
                    technologies:[
                        'C#'
                    ,   'ADO.net'
                    ,   'SQL'
                    ],
                    results:[]
                },
            ]
            
        },
        {
            start:{month:4, year:2010},
            end:{month:11, year:2011},
            company:{
                name:'Oi',
                logoUrl:'oi.png',
                info: {
                    pt:'Oi é uma das maiores empresas de telecomunicações do Brasil.',
                    en:'Oi is one of the largest telecommunications companies in Brazil.'
                }
            },
            role:{
                pt:'Especialista em Desenvolvimento de Canais', 
                en:'Channel Development Expert'
            },
            summary:{
                pt:'Desenvolvimento de ambiente informacional para análise da performance das operações de atendimento ao cliente.',
                en:'Development of data warehouse for call center operations performance analysis.'
            },
            activities:[
                 {pt: 'Arquiteto da solução' , en: 'Solution architect'}
                ,{pt: 'Líder de equipe' , en: 'Team leader'}
                ,{pt: 'Desenvolvimento do ETL (Sql, Sql Server, SSIS)' , en: 'ETL development (C#,SQL, Sql Server, Teradata, Mysql, Oracle,MySql)'}
                ,{pt: 'Construção dos indicadores chave' , en: 'Building key and operation performance indicators (SQL, Excel)'}
                ,{pt: 'Conciliação de dados (SQL, Teradata)' , en: 'Data reconciliation (SQL, Teradata).'}
                
            ],
            projects:[

            ]
            
        },
        {
            start:{month:5, year:2001},
            end:{month:4, year:2010},
            company:{
                name:'Oi',
                logoUrl:'oi.png',
                info: {
                    pt:'Oi é uma das maiores empresas de telecomunicações do Brasil.',
                    en:'Oi is one of the largest telecommunications companies in Brazil.'
                }
            },
            role:{
                pt:'Analista Sênior - Garantia da Receita', 
                en:'Revenue Assurance Senior Analyst'
            },
            summary:{
                pt:'Desenvolvimento de sistemas para aferição da cadeia de processamento do faturamento - Da geração dos registros das chamadas telefônicas à cobrança da chamada na fatura do cliente.',
                en:'Development of systems for validation of correct operation of the billing processing chain - From the generation of  call detail records (CDRs) to the billing of the customer\'s invoice.'
            },
            activities:[
                 {pt: 'Arquiteto da solução' , en: 'Solution architect'}
                ,{pt: 'Líder de equipe' , en: 'Team leader'}
                ,{pt: 'Desenvolvimento do ETL (C#, SQL, Sql Server, SSIS, Teradata)' , en: 'ETL development (C#,SQL, Sql Server, SSIS,Teradata)'}
                ,{pt: 'Construção dos indicadores chave' , en: 'Building key and operation performance indicators (SQL, Excel)'}
                ,{pt: 'Conciliação de dados (SQL, Teradata)' , en: 'Data reconciliation (SQL, Teradata).'}
                ,{pt: 'Desenvolvimento de aplicativos Windows (VB.net)' , en: 'Windows app development (VB.net)'}
                
            ],
            projects:[
                {
                    name:{pt:'Billing Verification',en:'Billing Verification'}, 
                    summary:{
                        pt:'Conjunto de sistemas para aferição da cadeia de faturamento. Este projeto se destacou pelo desafio de tratar grande volume dados: Cerca de 1 bilhão de registros de chamadas telefônicas carregados em poucas horas, além da conciliação de bases para identificar possíveis divergências.',
                        en:'Set of systems for measuring the billing chain. This project was highlighted by the challenge of handling large volumes of data: About 1 billion phone call records loaded within hours, as well as reconciling bases to identify possible divergences.'},
                    activities:[
                        {pt: 'Arquiteto da solução' , en: 'Solution architect'},
                        {pt: 'Líder de equipe' , en: 'Team leader'},
                        {pt: 'Desenvolvimento de programas de tratamento de registros e escrita em \'named pipes\' (C#, Named Pipes)' , en: 'Development of record handling and writing programs in named pipes (C#, Named Pipes)'},
                        {pt: 'Criação de uma interface de desenvolvedor além de uma  \'linguagem de programação\' (SQX) que de acordo com a sintaxe estabelecida fazia a geração dinâmica de SQL super otimizado em tempo de execução (C#)' , en: 'Creation of a developer interface in addition to a \'programming language\' (SQX) which according to the established syntax made the dynamic generation of SQL super optimized at runtime (C#)'},
                        {pt: 'Desenvolvimento do ETL (SQL, SQX)' , en: 'ETL development (SQL, SQX)'},
                        {pt: 'Especficação da cadeia de execução contendo mais de 100 processos a ser executada no Control-M' , en: 'Execution chain specification containing more than 100 processes to be executed in Control-M'},
                        {pt: 'Implantação de Controle Estatístico de Processos em cima dos dados telefônicos', en:'Implementation of Statistical Process Control over telecommunications data'}
                    ],
                    technologies:[
                        'C#'
                    ,   'Named Pipes'
                    ,   'ADO.net'
                    ,   'SQX'
                    ,   'SQL'
                    ],
                    results:[]
                },
            ]
            
        }
    ],
    skills:{
        functional:[
            {name:{pt: 'Desenvolvimento de dados' , en: 'Data development'}, level:4},
            {name:{pt: 'Desenvolvimento back end' , en: 'Back end development'}, level:4},
            {name:{pt: 'Desenvolvimento API Rest' , en: 'API Rest development'}, level:4},
            {name:{pt: 'Desenvolvimento front end' , en: 'Front end development'}, level:3},
            {name:{pt: 'Análise de dados' , en: 'Data analysis'}, level:3}
        ],
        programming:[
            {
                group:{pt:'Linguagens', en:'Languages'},
                list:[
                    {name:{pt: 'C#' , en: 'C#'}, level:4},
                    {name:{pt: 'Javascript' , en: 'Javascript'}, level:3},
                    {name:{pt: 'Java' , en: 'Java'}, level:2},
                    {name:{pt: 'VB.net' , en: 'VB.net'}, level:4},
                    {name:{pt: 'VBA' , en: 'VBA'}, level:3}
                ]
            },
            {
                group:{pt:'Dados', en:'Data'},
                list:[
                    {name:{pt: 'SQL' , en: 'SQL'}, level:4},
                    {name:{pt: 'T-SQL' , en: 'T-SQL'}, level:4},
                    {name:{pt: 'Map Reduce' , en: 'Map Reduce'}, level:2},
                    {name:{pt: 'Spark' , en: 'Spark'}, level:1},
                    {name:{pt: 'Hadoop' , en: 'Hadoop'}, level:1},
                    {name:{pt: 'Collibra' , en: 'Collibra'}, level:1}
                ]
            },          {
                group:{pt:'Bancos de dados', en:'Databases'},
                list:[
                    {name:{pt: 'Teradata' , en: 'Teradata'}, level:4},
                    {name:{pt: 'Sql Server' , en: 'Sql Server'}, level:4},
                    {name:{pt: 'Mysql' , en: 'Mysql'}, level:3}, 
                    {name:{pt: 'Postgresql' , en: 'Postgresql'}, level:3},
                    {name:{pt: 'Redshift' , en: 'Redshift'}, level:3},
                    {name:{pt: 'SQLite' , en: 'SQLite'}, level:3},
                    {name:{pt: 'Oracle' , en: 'Oracle'}, level:2},
                    {name:{pt: 'MongoDB' , en: 'MongoDB'}, level:2},
                ]
            },
            {
                group:{pt:'Web', en:'Web'},
                list:[
                    {name:{pt: 'Aspnet core' , en: 'Aspnet core'}, level:3},
                    {name:{pt: 'Razor' , en: 'Razor'}, level:3},
                    {name:{pt: 'HTML' , en: 'HTML'}, level:3},
                    {name:{pt: 'Javascript' , en: 'Javascript'}, level:3}, 
                    {name:{pt: 'CSS' , en: 'CSS'}, level:3},
                    {name:{pt: 'MVC' , en: 'MVC'}, level:3},
                    {name:{pt: 'Entity Framework' , en: 'Entity Framework'}, level:2},
                    {name:{pt: 'Microserviços' , en: 'Microservices'}, level:3},
                    {name:{pt: 'Docker' , en: 'Docker'}, level:1},
                    {name:{pt: 'React + Redux' , en: 'React + Redux'}, level:2}, 
                    {name:{pt: 'NodeJS' , en: 'NodeJS'}, level:1},
                    {name:{pt: 'API Rest' , en: 'API Rest'}, level:3}, 
                    {name:{pt: 'HTTP' , en: 'HTTP'}, level:3},
                    {name:{pt: 'TCP/IP' , en: 'TCP/IP'}, level:2},
                    {name:{pt: 'SOAP' , en: 'SOAP'}, level:2},
                    {name:{pt: 'Angular' , en: 'Angular'}, level:1}

                ]
            },
            {
                group:{pt:'Telemóvel', en:'Mobile'},
                list:[
                    {name:{pt: 'Xamarin' , en: 'Xamarin'}, level:2},
                    {name:{pt: 'React Native' , en: 'React Native'}, level:1}
                ]
            },
        ],
        tools:[
            'Microsoft Office',
            'Visual Studio',
            'Collibra',
            'Visual Studio Code',
            'SAS',
            'JIRA',
            'Salesforce',
            'Google Maps API',
            'Google Translate API',
            'Google Analytics',
            'Google Search Console',
            'Postman',
            'Azure Portal',
            'Robo 3T',
            'Word Press',
            'Visual Cron',
            'Eclipse',
            'DBeaver',
            'SS Integration Services',
            'SS Analysis Services',
            'SS Reporting Services',
            'Microsoft Project',
            'Power BI',
            'Tortoise SVN',
            'VSTS',
            'Git',
            
        ],
    }
    ,
    
    education:[
        {
            class:{pt:'Processos Gerenciais', en:'Management Process'},
            start:{year:2008},
            end:{year:2010},
            summary:{pt:'Formação em Administração, Gestão de pessoas e equipes, Estratégias empresariais, Técnicas de negociação, Gestão financeira, Gestão de Marketing, Negócios internacionais, etc.',en:'Management Formation: People & Team Management, Business Strategies, Negotiation Techniques, Financial Management, Marketing Management, International Business, etc.'},
            instituition:'Universidade Castelo Branco (Brasil)',
            icon:'graduation-cap'
        },
        {
            class:{pt:'Teradata Básico', en:'Teradata Basics'},
            date:{year:2003},
            summary:{pt:'Curso de SQL e Teradata SQL Assistant.',en:'SQL and Teradata SQL Assistant class.'},
            instituition:'Oi/Teradata',
            icon:'database'
        },
        {
            class:{pt:'Teradata: Ferramentas e Utilitários', en:'Teradata Tools and Utilities'},
            date:{year:2003},
            summary:{pt:'Curso dos utilitários de carga do Teradata.',en:'Teradata Loader class.'},
            instituition:'Oi/Teradata',
            icon:'database'
        },
        {
            class:{pt:'Teradata Avançado', en:'Teradata Advanced'},
            date:{year:2013},
            summary:{pt:'Curso de arquitetura de armazenamento de dados e estratégias de connstrução de queries para execução otimizada.',en:'Data storage architecture class and query building strategies for optimal execution.'},
            instituition:'Oi/Teradata',
            icon:'database'
        },
        {
            class:{pt:'Controle Estatístico de Processos', en:'Statistical Process Control'},
            date:{year:2004},
            summary:{pt:'Curso da metodologia estatística usada pelas indústrias para controle de qualidade e identificação de desvios no comportamento dos dados.',en:'Class of statistical methodology used by industries for quality control and identification of deviations in data behavior.'},
            instituition:'Oi',
            icon:'bar-chart'
        },
        {
            class:{pt:'SAS Enterprise Guide', en:'SAS Enterprise Guide'},
            date:{year:2005},
            summary:{pt:'Curso da ferramenta principal da SAS, empresa referência em ferramentas de manipulação de dados e estatística.',en:'SAS core tool class, a reference company in data manipulation and statistics tools.'},
            instituition:'Oi',
            icon:'database'
        },
        {
            class:{pt:'Programação SAS', en:'SAS Programming'},
            date:{year:2005},
            summary:{pt:'Curso da linguagem de programação SAS que permite implementar funcionalidades avançadas nos processos de ETL e geração de relatórios.',en:'SAS programming language class that enables you to implement advanced functionality in ETL and reporting processes.'},
            instituition:'Oi',
            icon:'database'
        },
        {
            class:{pt:'Gerenciamento de Projetos', en:'Project Management'},
            date:{year:2010},
            summary:{pt:'Treinamento de gerenciamento de projetos.',en:'Project management training.'},
            instituition:'Oi',
            icon:'group'
        },
        {
            class:{pt:'Big Data: Processamento de dados com Spark', en:'Big Data: Data processing with Spark'},
            date:{year:2018},
            summary:{pt:'Curso de Apache Spark, utilizando Hadoop. Criação de RDDs e Data Frames.',en:'Apache Spark class using Hadoop. Creation of RDDs and Data Frames.'},
            instituition:'Udemy',
            icon:'database'
        },
        {
            class:{pt:'Business Intelligence com Power BI', en:'Business Intelligence with Power BI'},
            date:{year:2019},
            summary:{pt:'Uso da ferramenta Power BI na criação de análises.',en:'Use of the Power BI tool to create analyzes.'},
            instituition:'Udemy',
            icon:'database'
        },
        {
            class:{pt:'ASP NET Core com Angular: Desenvolvimento WEB Fullstack', en:'ASP NET Core with Angular: Fullstack Web Development'},
            date:{year:2018},
            summary:{pt:'Curso de desenvolvimento web completo: Back end em Asp net core, Front End em Angular 6, HTML, CSS, Javascript, Bootstrap, etc.',en:'Complete web development class: Back end in Asp net core, Front End in Angular 6, HTML, CSS, Javascript, Bootstrap, etc.'},
            instituition:'Udemy',
            icon:'code'
        },
        {
            class:{pt:'Docker: Ferramenta essencial para desenvolvedores', en:'Docker: Essential Developer Tool'},
            date:{year:2018},
            summary:{pt:'Curso de desenvolvimento de microserviços utilizando Docker.',en:'Microservice development class using Docker.'},
            instituition:'Udemy',
            icon:'code'
        },
        {
            class:{pt:'Microsoft Azure: Aprenda do zero', en:'Microsoft Azure: Learn From The Beginning'},
            date:{year:2018},
            summary:{pt:'Curso das principais funcionalidades do Microsoft Azure: App service, Storage, Máquinas virtuais, Redes virtuais, VPN etc.',en:'Microsoft Azure core feature training: App Service, Storage, Virtual Machines, Virtual Networks, VPN, etc.'},
            instituition:'Udemy',
            icon:'cloud'
        },
        {
            class:{pt:'ASP Net Core Expert - APIs Poderosas - Aprendendo na prática', en:'ASP Net Core Expert - Powerful APIs - Learning in Practice'},
            date:{year:2018},
            summary:{pt:'Curso de Asp Net Core focado no desenvolvimento de APIs REST utilizando Entity Framework.',en:'Asp Net Core class focused on developing REST APIs using Entity Framework.'},
            instituition:'Udemy',
            icon:'code'
        },
        {
            class:{pt:'MongoDB Completo: Do básico ao avançado', en:'Complete MongoDB: From Basic to Advanced'},
            date:{year:2018},
            summary:{pt:'Treinamento com todo o necessário para a utilização do MongoDB.',en:'Training with everything necessary to use MongoDB.'},
            instituition:'Udemy',
            icon:'database'
        },
        {
            class:{pt:'SEO Completo: Do básico ao avançado', en:'Complete SEO: From Basic to Advanced'},
            date:{year:2018},
            summary:{pt:'Curso com as melhores estratégias para desenvolver um website com bom ranqueamento nos buscadores.',en:'Class with the best strategies to develop a website with good search engine ranking.'},
            instituition:'Udemy',
            icon:'search-plus'
        },
        {
            class:{pt:'REACT + REDUX', en:'REACT + REDUX'},
            date:{year:2019},
            summary:{pt:'Curso do fantástico framework Javascript React e o gerenciador de estado Redux. Além disso com desenvolvimento de back end em NodeJS.',en:'Class of the fantastic Javascript React framework and the Redux state manager. Also with backend development in NodeJS.'},
            instituition:'Udemy',
            icon:'code'
        },
        {
            class:{pt:'REACT Native', en:'REACT Native'},
            date:{year:2019},
            summary:{pt:'Curso do framework React Native para desenvolvimento de aplicativos mobile multi plataforma.',en:'React Native framework class for cross platform mobile application development.'},
            instituition:'Udemy',
            icon:'code'
        }
    ],
    languages:[
        {
            name:{pt:'Português',en:'Portuguese'},
            level: 5,
            imageUrl:'pt.png'
        },
        {
            name:{pt:'Inglês',en:'English'},
            level: 3,
            imageUrl:'uk.png'
        }
    ]

}

export default (state = INITIAL_STATE,action)=>{
    return state
}