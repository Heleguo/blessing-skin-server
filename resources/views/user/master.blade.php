<!DOCTYPE html>
<html lang="{{ $locale }}">
<head>
    @include('shared.head')
    <title>@yield('title') - {{ option_localized('site_name') }}</title>
    @yield('style')
</head>

<body class="{{ $dark_mode ? 'dark-mode' : '' }} hold-transition sidebar-mini" style="background: var(--heleguo-bg-primary);">
    <div class="wrapper">
        @include('shared.header')
        @include('shared.sidebar', ['scope' => 'user'])
        @yield('content')
        @include('shared.footer')
    </div>

    @include('shared.foot')
    @yield('script')
</body>
</html>
