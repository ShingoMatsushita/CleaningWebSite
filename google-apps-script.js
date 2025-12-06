/**
 * Google Apps Script - Webアプリケーション
 * 
 * このコードをGoogle Apps Scriptエディタにコピー＆ペーストして使用してください。
 * 
 * 設定手順:
 * 1. Googleスプレッドシートを開く
 * 2. 拡張機能 > Apps Script を選択
 * 3. このコードをコピー＆ペースト
 * 4. スプレッドシートIDとシート名を設定
 * 5. デプロイ > 新しいデプロイ > 種類: ウェブアプリ を選択
 * 6. 実行ユーザー: 自分 を選択
 * 7. アクセスできるユーザー: 全員 を選択
 * 8. デプロイしてURLを取得
 */

// ============================================
// 設定
// ============================================
const SPREADSHEET_ID = '1QpoD5M2Bz2W5d-3FIfyAnYJ82etGjllNQelSA3ngI7w';
const SHEET_NAME = 'シート1';

// ============================================
// メイン処理: POSTリクエストを受信
// ============================================
function doPost(e) {
  try {
    // リクエストデータを取得
    let postData;
    
    // まずURLパラメータから取得を試みる（CORS回避のため）
    if (e.parameter && Object.keys(e.parameter).length > 0) {
      postData = {
        name: e.parameter.name || '',
        email: e.parameter.email || '',
        phone: e.parameter.phone || '',
        service: e.parameter.service || '',
        message: e.parameter.message || '',
        language: e.parameter.language || 'ja'
      };
    } else if (e.postData && e.postData.contents) {
      // JSON形式のPOSTデータから取得
      try {
        postData = JSON.parse(e.postData.contents);
      } catch (parseError) {
        // JSONパースに失敗した場合、URLエンコードされたデータを処理
        const params = e.postData.contents.split('&');
        postData = {};
        params.forEach(param => {
          const [key, value] = param.split('=');
          if (key && value) {
            postData[decodeURIComponent(key)] = decodeURIComponent(value);
          }
        });
      }
    } else {
      throw new Error('No data received');
    }
    
    // スプレッドシートを開く
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // シートが存在しない場合は作成
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      // ヘッダー行を設定
      setHeaders(sheet);
    }
    
    // ヘッダーが存在しない場合は追加
    if (sheet.getLastRow() === 0) {
      setHeaders(sheet);
    }
    
    // タイムスタンプを取得（日本時間）
    const timestamp = Utilities.formatDate(
      new Date(),
      'Asia/Tokyo',
      'yyyy-MM-dd HH:mm:ss'
    );
    
    // IPアドレスを取得（可能な場合）
    const ipAddress = e.parameter.ipAddress || 
                     (e.postData && e.postData.ipAddress) || 
                     'Unknown';
    
    // データを準備
    const rowData = [
      postData.name || '',
      postData.email || '',
      postData.phone || '',
      postData.service || '',
      postData.message || '',
      postData.language || '',
      timestamp,
      ipAddress
    ];
    
    // スプレッドシートに追加
    sheet.appendRow(rowData);
    
    // 成功レスポンス（CORS対応）
    const response = ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully',
        timestamp: timestamp
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
    return response;
      
  } catch (error) {
    // エラーログを記録
    Logger.log('Error: ' + error.toString());
    Logger.log('Stack: ' + error.stack);
    
    // エラーレスポンス（CORS対応）
    const errorResponse = ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString(),
        message: 'Failed to save data',
        details: error.stack
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
    return errorResponse;
  }
}

// ============================================
// ヘッダー行を設定
// ============================================
function setHeaders(sheet) {
  const headers = [
    '名前',
    'メール',
    '電話',
    'サービス',
    'メッセージ',
    '言語',
    'タイムスタンプ',
    'IPアドレス'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // ヘッダー行を太字・背景色設定
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('#ffffff');
  
  // 列幅を自動調整
  sheet.autoResizeColumns(1, headers.length);
}

// ============================================
// OPTIONSリクエスト用（CORSプリフライト対応）
// ============================================
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON);
}

// ============================================
// GETリクエスト用（テスト用）
// ============================================
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'OK',
      message: 'Google Apps Script Web App is running',
      spreadsheetId: SPREADSHEET_ID,
      sheetName: SHEET_NAME
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ============================================
// テスト関数（手動実行用）
// ============================================
function testSaveData() {
  const testData = {
    name: 'テスト太郎',
    email: 'test@example.com',
    phone: '090-1234-5678',
    service: 'airbnb',
    message: 'これはテストメッセージです',
    language: 'ja'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    },
    parameter: {
      ipAddress: '127.0.0.1'
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

