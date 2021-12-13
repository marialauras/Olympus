CREATE TABLE Olimpiada (
    Ano    NUMERIC(4)      NOT NULL,
    Sede   VARCHAR(3)      NOT NULL,
    CONSTRAINT pk_olimpiada PRIMARY KEY (Ano)
);

CREATE TABLE Tocha (
    Ano        	          NUMERIC(4)     NOT NULL,
    Codigo                NUMERIC(6)     NOT NULL,
    CpfDesigner           VARCHAR(14)    NOT NULL,
    QuantidadeDeLocais    NUMERIC(3)     NULL,
    CONSTRAINT pk_tocha PRIMARY KEY (Ano, Codigo)
);

CREATE TABLE Mascote (
    Ano       	   NUMERIC(4)     NOT NULL,
    CpfCriador     VARCHAR(14)    NOT NULL,
    Descricao      VARCHAR(600)   NULL,
    Nome           VARCHAR(100)   NOT NULL,
    CONSTRAINT pk_mascote PRIMARY KEY (Ano, Nome)
);

CREATE TABLE Logo (
    Ano       	   NUMERIC(4)     NOT NULL,
    CpfCriador     VARCHAR(14)    NOT NULL,
    Descricao      VARCHAR(600)   NULL,
    Nome           VARCHAR(100)   NULL,
    CONSTRAINT pk_logo PRIMARY KEY (Ano, Nome)
);

CREATE TABLE Pessoa (
    AnoNasc     	NUMERIC(4)     NULL,
    DiaNasc     	NUMERIC(2)     NULL,
    MesNasc     	NUMERIC(2)     NULL,
    CPF    		    VARCHAR(14)    NOT NULL,
    Pais            VARCHAR(3)     NOT NULL,
    PrimeiroNome    VARCHAR(100)   NOT NULL,
    Sobrenome    	VARCHAR(200)   NULL,
    Sexo            VARCHAR(1)     NOT NULL,
    CONSTRAINT pk_pessoa PRIMARY KEY (CPF),
    CONSTRAINT ck_sexo_pessoa CHECK (Sexo='M' or Sexo='F')
);

CREATE TABLE Atleta (
    CPF    		           VARCHAR(14)    NOT NULL,
    CodMedalhista     	   NUMERIC(6)     NULL,
    QuantidadeMedalhas     NUMERIC(4)     NULL,
    CONSTRAINT pk_atleta   PRIMARY KEY (CPF)

);

CREATE TABLE Equipe (
    Abreviacao             VARCHAR(3)     NOT NULL,
    Nome             	   VARCHAR(100)   NULL,
    CodMedalhista          NUMERIC(6)     NULL,
    CONSTRAINT pk_equipe   PRIMARY KEY (Abreviacao)
);

CREATE TABLE Podio (
    CodProva               NUMERIC(6)     NOT NULL,
    CodMedalhista          NUMERIC(6)     NOT NULL,
    CONSTRAINT pk_podio    PRIMARY KEY (CodProva,CodMedalhista)
);

CREATE TABLE Medalhista (
    CodMedalhista          NUMERIC(6)     NOT NULL,
    CONSTRAINT pk_medalhista    PRIMARY KEY (CodMedalhista)
);

CREATE TABLE Modalidade (
    Nome             	   VARCHAR(100)    NULL,
    Codigo       	       NUMERIC(6)      NOT NULL,
    Sexo                   VARCHAR(1)      NOT NULL,
    CONSTRAINT pk_modalidade   PRIMARY KEY (Codigo),
    CONSTRAINT ck_sexo_modalidade CHECK (Sexo='M' or Sexo='F')
);

CREATE TABLE Prova (
    Codigo     	        NUMERIC(6)     NOT NULL,
    CodModalidade       NUMERIC(6)     NOT NULL,
    Descrição     	    VARCHAR(600)   NULL,
    DataDia    		    NUMERIC(2)     NOT NULL,
    DataMes             NUMERIC(2)     NOT NULL,
    DataMinuto    	    NUMERIC(2)     NOT NULL,
    DataHoras    	    NUMERIC(2)     NOT NULL,
    Fase       	        VARCHAR(30)    NULL,
    CONSTRAINT pk_prova    PRIMARY KEY (Codigo)
   
);

CREATE TABLE Pais (
    Abreviacao     	VARCHAR(3)       NOT NULL,
    Continente      VARCHAR(30)      NOT NULL,
    NomeOficial    	VARCHAR(200)     NULL,
    NomeComum    	VARCHAR(100)     NULL,
    CONSTRAINT pk_pais    PRIMARY KEY (Abreviacao)
);

CREATE TABLE Continente (
    Nome     	        NUMERIC(4)     NULL,
    Cor                 VARCHAR(30)    NOT NULL,
    QuantidadePaises    NUMERIC(2)     NULL,
    CONSTRAINT pk_continente PRIMARY KEY (Cor),
    CONSTRAINT ck_sexo_dep CHECK (Cor= "Azul" or Cor= "Vermelho" or Cor= "Verde" or Cor= "Amarelo" or Cor= "Preto")
);


CREATE TABLE Embaixadores (
    CpfEmbaixador     	     VARCHAR(14)     NOT NULL,
    CodTocha                 NUMERIC(4)      NOT NULL,
    CONSTRAINT pk_embaixadores    PRIMARY KEY (CpfEmbaixador, CodTocha)
);


CREATE TABLE ProvasAtletas (
    CodProva    	     NUMERIC(4)     NOT NULL,
    CpfAtleta            VARCHAR(14)    NOT NULL,
    CONSTRAINT pk_provas_atletas    PRIMARY KEY (CodProva,CpfAtleta)
);

CREATE TABLE EquipesAtletas (
    AbrevEquipe    	     VARCHAR(3)     NOT NULL,
    CpfAtleta            VARCHAR(14)    NOT NULL,
    CONSTRAINT pk_equipe_atletas    PRIMARY KEY (AbrevEquipe,CpfAtleta)
);

CREATE TABLE PodioMedalhistas (
    Posicao    	     NUMERIC(4)     NOT NULL,
    CodMedalhista    NUMERIC(6,1)   NOT NULL,
    CodProva	     NUMERIC(4)     NOT NULL,
    CONSTRAINT pk_podio_medalhistas    PRIMARY KEY (CodMedalhista ,CpfAtleta)
);

CREATE TABLE ProvasEquipes (
    AbrevEquipe      VARCHAR(3)     NOT NULL,
    CodProva	     NUMERIC(6)     NOT NULL,
    CONSTRAINT pk_provas_equipes    PRIMARY KEY (CodProva,AbrevEquipe)
);

CREATE TABLE OlimpiadaPais(
    AnoOlimpiada   	     NUMERIC(4)     NOT NULL,
    AbreviacaoPais	     VARCHAR(3)     NOT NULL,
    NumeroDeAtletas	     NUMERIC(4)     NULL,
    NumeroDeMedalhas	 NUMERIC(4)     NULL,
    CONSTRAINT pk_pais_olimpiada    PRIMARY KEY (AnoOlimpiada,AbreviacaoPais)
);

INSERT INTO Pais
VALUES ('EUA', 'América', 'Estados Unidos da América', 'Estados Unidos');
INSERT INTO Pais
VALUES ('EUA', 'América', 'Estados Unidos da América', 'Estados Unidos');
INSERT INTO Pais
VALUES ('RUS', 'Europa', 'Federação Russa', 'Rússia');
INSERT INTO Pais
VALUES ('ALE', 'Europa', 'República Federal da Alemanha', 'Alemanha');
INSERT INTO Pais
VALUES ('GBR', 'Europa', 'Reino Unido da Grã-Bretanha', 'Grã-Bretanha');
INSERT INTO Pais
VALUES ('CHI', 'Ásia', 'República Popular da China', 'China');
INSERT INTO Pais
VALUES ('FRA', 'Europa', 'República Francesa', 'França');
INSERT INTO Pais
VALUES ('ITA', 'Europa', 'República Italiana', 'Itália');
INSERT INTO Pais
VALUES ('SWE', 'Europa', 'Reino da Suécia', 'Suécia');
INSERT INTO Pais
VALUES ('NOR', 'Europa', 'Reino da Noruega', 'Noruega');
INSERT INTO Pais
VALUES ('JPN', 'Ásia', 'Japão', 'Japão');
INSERT INTO Pais
VALUES ('AUS', 'Oceania', 'Comunidade da Austrália', 'Austrália');
INSERT INTO Pais
VALUES ('CAN', 'América', 'Canadá', 'Canadá');
INSERT INTO Pais
VALUES ('KEN', 'África', 'República do Quênia', 'Quênia');
INSERT INTO Pais
VALUES ('GRE', 'Europa', 'República Helénica', 'Grécia');
INSERT INTO Pais
VALUES ('RSA', 'África', 'República da África do Sul', 'África do Sul');
INSERT INTO Pais
VALUES ('NZL', 'Oceania', 'Nova Zelândia', 'Nova Zelândia');
INSERT INTO Pais
VALUES ('KOR', 'Ásia', 'República da Coreia', 'Coréia do Sul');
INSERT INTO Pais
VALUES ('ARG', 'América', 'República Argentina', 'Argentina');
INSERT INTO Pais
VALUES ('NED', 'Europa', 'Reino dos Países Baixos', 'Países Baixos');
