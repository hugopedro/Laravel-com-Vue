@extends('layouts.app')

@section('content')
  <pagina tamanho="12">
    <painel titulo="Lista de Artigos">
      <tabela-lista v-bind:titulos="['teste','outros']"/> <!-- com o v-bind ele irá reconhecer os titulos [] como array-->

    </painel>

  </pagina>
@endsection