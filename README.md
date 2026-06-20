# 장다윗 · Resume

정적 이력서 사이트. 다크 IDE 테마(터미널 도시에 컨셉) + 라이트 모드 토글 + PDF 다운로드.

- **Live**: https://resume.jangdaw.it
- 빌드 과정 없는 순수 HTML/CSS/JS — `index.html`을 브라우저로 바로 열어도 동작합니다.

## 파일 구조

| 파일 | 설명 |
|------|------|
| `index.html` | 이력서 콘텐츠 |
| `styles.css` | 화면(다크/라이트) + 인쇄(A4 라이트) 스타일 |
| `script.js` | 테마 토글, PDF 다운로드 |
| `.github/workflows/deploy.yml` | GitHub Pages 자동 배포 |
| `CNAME` | 커스텀 도메인 (`resume.jangdaw.it`) |

## 로컬에서 보기

```bash
# 그냥 파일 열기
open index.html

# 또는 로컬 서버
python3 -m http.server 8000   # → http://localhost:8000
```

## PDF 다운로드

우측 하단 **PDF** 버튼 → 브라우저 인쇄 대화상자 → **"PDF로 저장"** 선택.
인쇄 시 자동으로 깔끔한 A4 라이트 레이아웃으로 전환됩니다. (`⌘P` / `Ctrl+P` 도 동일)

## 배포 (GitHub Pages)

1. 이 저장소를 GitHub에 push (`main` 브랜치).
2. **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 설정.
3. push 하면 워크플로가 자동 배포합니다.

### 커스텀 도메인
- `CNAME` 에 `resume.jangdaw.it` 이 설정되어 있습니다.
- DNS 에서 `resume` 서브도메인의 CNAME 을 `<username>.github.io` 로 지정하세요.
- 커스텀 도메인을 쓰지 않는다면 `CNAME` 파일을 삭제하세요.
